import { useMemo, useState, type FormEvent } from "react";
import { Star } from "lucide-react";
import { useSearchParams } from "react-router-dom";

import AccountModal from "../../components/account/AccountModal";
import AccountShell from "../../components/account/AccountShell";
import { useAccount } from "../../context/AccountContext";
import type { MockReview } from "../../data/mockReviews";

function StarPicker({
  value,
  onChange,
}: {
  value: number;
  onChange: (value: number) => void;
}) {
  return (
    <div className="account-stars">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          className={star <= value ? "on" : ""}
          onClick={() => onChange(star)}
          aria-label={`${star} stars`}
        >
          <Star size={22} fill={star <= value ? "currentColor" : "none"} />
        </button>
      ))}
    </div>
  );
}

function AccountReviews() {
  const { reviews, orders, addReview, updateReview, deleteReview } = useAccount();
  const [params, setParams] = useSearchParams();
  const writeOrderId = params.get("write");
  const writeOrder = orders.find((order) => order.id === writeOrderId);
  const [editing, setEditing] = useState<MockReview | null>(null);
  const [rating, setRating] = useState(5);
  const [text, setText] = useState("");
  const [productId, setProductId] = useState(writeOrder?.items[0]?.productId ?? "");

  const writeItem = useMemo(
    () => writeOrder?.items.find((item) => item.productId === productId) ?? writeOrder?.items[0],
    [productId, writeOrder],
  );

  function closeWrite() {
    setParams({});
    setText("");
    setRating(5);
  }

  function submitNew(event: FormEvent) {
    event.preventDefault();
    if (!writeOrder || !writeItem || !text.trim()) {
      return;
    }
    addReview({
      productId: writeItem.productId,
      productName: writeItem.name,
      productImage: writeItem.image,
      rating,
      text: text.trim(),
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      orderId: writeOrder.id,
    });
    closeWrite();
  }

  function submitEdit(event: FormEvent) {
    event.preventDefault();
    if (!editing) {
      return;
    }
    updateReview(editing.id, { rating, text: text.trim() });
    setEditing(null);
  }

  return (
    <AccountShell title="My Reviews">
      {reviews.length === 0 ? (
        <div className="account-empty">You have not written any reviews yet.</div>
      ) : (
        <div className="account-review-list">
          {reviews.map((review) => (
            <article key={review.id} className="account-review-card">
              <img src={review.productImage} alt={review.productName} />
              <div>
                <h3>{review.productName}</h3>
                <p className="account-rating">
                  {"★".repeat(review.rating)}
                  {"☆".repeat(5 - review.rating)}
                </p>
                <p>{review.text}</p>
                <small>{review.date}</small>
              </div>
              <div className="account-form-actions">
                <button
                  type="button"
                  className="account-btn ghost"
                  onClick={() => {
                    setEditing(review);
                    setRating(review.rating);
                    setText(review.text);
                  }}
                >
                  Edit Review
                </button>
                <button
                  type="button"
                  className="account-btn ghost danger"
                  onClick={() => {
                    if (window.confirm("Delete this review?")) {
                      deleteReview(review.id);
                    }
                  }}
                >
                  Delete Review
                </button>
              </div>
            </article>
          ))}
        </div>
      )}

      <AccountModal open={Boolean(writeOrder)} title="Write Review" onClose={closeWrite}>
        <form className="account-form" onSubmit={submitNew}>
          {writeOrder ? (
            <label>
              Product
              <select
                value={writeItem?.productId}
                onChange={(event) => setProductId(event.target.value)}
              >
                {writeOrder.items.map((item) => (
                  <option key={item.productId} value={item.productId}>
                    {item.name}
                  </option>
                ))}
              </select>
            </label>
          ) : null}
          <StarPicker value={rating} onChange={setRating} />
          <label>
            Review
            <textarea
              rows={4}
              value={text}
              onChange={(event) => setText(event.target.value)}
            />
          </label>
          <button type="submit" className="account-btn">
            Submit Review
          </button>
        </form>
      </AccountModal>

      <AccountModal
        open={Boolean(editing)}
        title="Edit Review"
        onClose={() => setEditing(null)}
      >
        <form className="account-form" onSubmit={submitEdit}>
          <StarPicker value={rating} onChange={setRating} />
          <label>
            Review
            <textarea
              rows={4}
              value={text}
              onChange={(event) => setText(event.target.value)}
            />
          </label>
          <button type="submit" className="account-btn">
            Save
          </button>
        </form>
      </AccountModal>
    </AccountShell>
  );
}

export default AccountReviews;
