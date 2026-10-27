export interface ProductVariety {
  id: string;
  name: string;
  title: string;
  image: string;
  thumb: string;
  price: number;
  weight: string;
  origin: string;
  seller: string;
  description: string;
}

export const productVarietiesMap: Record<string, ProductVariety[]> = {
  // 1. APPLE
  Apple: [
    {
      id: "apple-royal",
      name: "Royal Delicious",
      title: "Fresh Red Apple",
      image: "/src/frontend/assets/images/products/apple.jpg",
      thumb: "/src/frontend/assets/images/products/apple.jpg",
      price: 150,
      weight: "1 kg",
      origin: "Kullu, HP",
      seller: "Himalaya Farm",
      description:
        "Crisp, juicy and naturally sweet red apples, grown by local farmers using organic methods. Perfect for snacking, juicing or adding to your favourite recipes.",
    },
    {
      id: "apple-golden",
      name: "Golden Delicious",
      title: "Golden Delicious Apple",
      image: "/src/frontend/assets/images/products/apple-golden-delicious.jpg",
      thumb: "/src/frontend/assets/images/products/apple-golden-delicious.jpg",
      price: 160,
      weight: "1 kg",
      origin: "Mustang, Nepal",
      seller: "Highland Orchards",
      description:
        "Fragrant, honey-sweet golden yellow apples with tender skin and a mellow, crisp bite. Freshly picked from high-altitude Mustang orchards.",
    },
    {
      id: "apple-granny",
      name: "Granny Smith",
      title: "Granny Smith Apple",
      image: "/src/frontend/assets/images/products/apple-granny-smith.jpg",
      thumb: "/src/frontend/assets/images/products/apple-granny-smith.jpg",
      price: 180,
      weight: "1 kg",
      origin: "Solukhumbu, Nepal",
      seller: "Mountain Fresh Farm",
      description:
        "Bright green, tangy and delightfully tart apples with an ultra-crisp crunch. Outstanding for fresh salads, baking and healthy snacking.",
    },
    {
      id: "apple-fuji",
      name: "Fuji Apple",
      title: "Fuji Striped Apple",
      image: "/src/frontend/assets/images/products/apple-fuji.jpg",
      thumb: "/src/frontend/assets/images/products/apple-fuji.jpg",
      price: 170,
      weight: "1 kg",
      origin: "Jumla, Nepal",
      seller: "Valley Fresh Orchards",
      description:
        "Beautiful bi-color red and yellow striped apples packed with aromatic sweetness and long-lasting freshness from organic valley farms.",
    },
  ],

  // 2. HONEY
  Honey: [
    {
      id: "honey-mustang",
      name: "Mustang Wild",
      title: "Mustang Wild Mountain Honey",
      image: "/src/frontend/assets/images/products/honey.jpg",
      thumb: "/src/frontend/assets/images/products/honey.jpg",
      price: 1800,
      weight: "1 kg",
      origin: "Mustang, Nepal",
      seller: "Pure Natural",
      description:
        "Raw, unprocessed wild honey harvested from high-altitude cliff bee colonies in Mustang. Rich in natural pollens, enzymes, and deep floral notes.",
    },
    {
      id: "honey-rudilo",
      name: "Rudilo Blossom",
      title: "Organic Rudilo Flower Honey",
      image: "/src/frontend/assets/images/products/honey-rudilo.jpg",
      thumb: "/src/frontend/assets/images/products/honey-rudilo.jpg",
      price: 1650,
      weight: "1 kg",
      origin: "Kavre, Nepal",
      seller: "Hillside Apiary",
      description:
        "Harvested during the autumn blooming of aromatic Rudilo herbs in the mid-hills. Prized in traditional Ayurveda for respiratory wellness.",
    },
    {
      id: "honey-chiuri",
      name: "Chiuri Herbal",
      title: "Pure Chiuri Butter-Tree Honey",
      image: "/src/frontend/assets/images/products/honey-chiuri.jpg",
      thumb: "/src/frontend/assets/images/products/honey-chiuri.jpg",
      price: 1550,
      weight: "1 kg",
      origin: "Chitwan, Nepal",
      seller: "Terai Organic Beekeepers",
      description:
        "Naturally golden honey sourced from the fragrant white blossoms of the Himalayan Indian Butter Tree. Smooth, buttery texture with caramel notes.",
    },
    {
      id: "honey-acacia",
      name: "Golden Forest",
      title: "Highland Multifloral Honey",
      image: "/src/frontend/assets/images/products/honey-forest.jpg",
      thumb: "/src/frontend/assets/images/products/honey-forest.jpg",
      price: 1400,
      weight: "1 kg",
      origin: "Ilam, Nepal",
      seller: "Eastern Forest Co-op",
      description:
        "Crystal clear, sweet honey gathered by native bees across sub-alpine wildflower meadows and tea garden forests of eastern Nepal.",
    },
  ],

  // 3. ORANGE
  Orange: [
    {
      id: "orange-sunsari",
      name: "Sunsari Mandarin",
      title: "Organic Sunsari Sweet Mandarin",
      image: "/src/frontend/assets/images/products/orange.jpg",
      thumb: "/src/frontend/assets/images/products/orange.jpg",
      price: 650,
      weight: "1 kg",
      origin: "Sunsari, Nepal",
      seller: "Fresh Valley",
      description:
        "Sun-ripened, easy-to-peel sweet mandarin oranges bursting with natural juice, delicate acidity, and rich vitamin C from the eastern terai.",
    },
    {
      id: "orange-nagpur",
      name: "Nagpur Sweet",
      title: "Juicy Sweet Table Orange",
      image: "/src/frontend/assets/images/products/orange-nagpur.jpg",
      thumb: "/src/frontend/assets/images/products/orange-nagpur.jpg",
      price: 620,
      weight: "1 kg",
      origin: "Palpa, Nepal",
      seller: "Mountain Citrus Farm",
      description:
        "Traditional plump, aromatic citrus with thick fragrant zest and juicy segments. Perfect for refreshing daily breakfast snacking.",
    },
    {
      id: "orange-blood",
      name: "Blood Orange",
      title: "Ruby Red Blood Orange",
      image: "/src/frontend/assets/images/products/orange-blood.jpg",
      thumb: "/src/frontend/assets/images/products/orange-blood.jpg",
      price: 720,
      weight: "1 kg",
      origin: "Ilam, Nepal",
      seller: "Highland Citrus Co.",
      description:
        "Exotic citrus with stunning ruby-streaked pulp, offering a complex raspberry-sweet flavor profile loaded with anthocyanin antioxidants.",
    },
    {
      id: "orange-valencia",
      name: "Valencia Juice",
      title: "Fresh Valencia Juicing Orange",
      image: "/src/frontend/assets/images/products/orange-valencia.jpg",
      thumb: "/src/frontend/assets/images/products/orange-valencia.jpg",
      price: 580,
      weight: "1 kg",
      origin: "Chitwan, Nepal",
      seller: "Green Harvest",
      description:
        "The quintessential juicing orange—exceptionally high juice yield with a balanced sweet-tangy taste that brightens your morning routine.",
    },
  ],

  // 4. AVOCADO
  Avocado: [
    {
      id: "avocado-hass",
      name: "Hass Avocado",
      title: "Fresh Organic Hass Avocado",
      image: "/src/frontend/assets/images/products/avocado.jpg",
      thumb: "/src/frontend/assets/images/products/avocado.jpg",
      price: 850,
      weight: "1 kg",
      origin: "Damak, Nepal",
      seller: "Green Harvest",
      description:
        "The gold standard of avocados: dark pebbled skin, velvety rich buttery flesh, and a rich nutty flavor ideal for guacamole and toasts.",
    },
    {
      id: "avocado-fuerte",
      name: "Fuerte Green",
      title: "Smooth Skin Fuerte Avocado",
      image: "/src/frontend/assets/images/products/avocado-fuerte.jpg",
      thumb: "/src/frontend/assets/images/products/avocado-fuerte.jpg",
      price: 780,
      weight: "1 kg",
      origin: "Dhankuta, Nepal",
      seller: "Eastern Agro Farm",
      description:
        "Medium-large pear-shaped avocado with smooth pliable green skin, pale green flesh, and a delicate, creamy buttery taste.",
    },
    {
      id: "avocado-bacon",
      name: "Bacon Variety",
      title: "Mild Creamy Bacon Avocado",
      image: "/src/frontend/assets/images/products/avocado-bacon.jpg",
      thumb: "/src/frontend/assets/images/products/avocado-bacon.jpg",
      price: 750,
      weight: "1 kg",
      origin: "Kavre, Nepal",
      seller: "Hillside Produce",
      description:
        "Oval fruit with thin glossy skin and tender, light green flesh. Exceptionally mild and creamy, blending effortlessly into smoothies.",
    },
    {
      id: "avocado-reed",
      name: "Reed Gourmet",
      title: "Plump Round Reed Avocado",
      image: "/src/frontend/assets/images/products/avocado-reed.jpg",
      thumb: "/src/frontend/assets/images/products/avocado-reed.jpg",
      price: 890,
      weight: "1 kg",
      origin: "Pokhara, Nepal",
      seller: "Annapurna Organic",
      description:
        "Large, round, cannonball-shaped green avocado with thick skin that peels easily. Extremely smooth and dense without any fibers.",
    },
  ],

  // 5. BANANA
  Banana: [
    {
      id: "banana-malbhog",
      name: "Malbhog Sweet",
      title: "Traditional Nepali Malbhog Banana",
      image: "/src/frontend/assets/images/products/banana.jpg",
      thumb: "/src/frontend/assets/images/products/banana.jpg",
      price: 180,
      weight: "1 kg",
      origin: "Chitwan, Nepal",
      seller: "Valley Fresh",
      description:
        "Nepal's beloved indigenous banana variety: medium size, golden peel, and an intoxicatingly sweet, honeyed aroma with velvety texture.",
    },
    {
      id: "banana-robusta",
      name: "Robusta Gold",
      title: "Energy-Rich Robusta Cavendish",
      image: "/src/frontend/assets/images/products/banana-robusta.jpg",
      thumb: "/src/frontend/assets/images/products/banana-robusta.jpg",
      price: 150,
      weight: "1 kg",
      origin: "Nawalparasi, Nepal",
      seller: "Terai Fruit Alliance",
      description:
        "Large, firm, golden yellow bananas packed with potassium and natural carbohydrates. The perfect everyday breakfast and workout snack.",
    },
    {
      id: "banana-red",
      name: "Red Dacca",
      title: "Exotic Red Dacca Banana",
      image: "/src/frontend/assets/images/products/banana-red.jpg",
      thumb: "/src/frontend/assets/images/products/banana-red.jpg",
      price: 240,
      weight: "1 kg",
      origin: "Jhapa, Nepal",
      seller: "Heritage Growers",
      description:
        "Distinctive reddish-purple skin and creamy pink-hued flesh offering a subtle berry sweetness. Rich in beta-carotene and vitamin C.",
    },
    {
      id: "banana-dwarf",
      name: "Baby Cavendish",
      title: "Sweet Finger Cavendish Banana",
      image: "/src/frontend/assets/images/products/banana-baby.jpg",
      thumb: "/src/frontend/assets/images/products/banana-baby.jpg",
      price: 160,
      weight: "1 kg",
      origin: "Sarlahi, Nepal",
      seller: "Fresh Valley",
      description:
        "Bite-sized, thin-skinned tender bananas favored by children and quick snackers for their intensely concentrated tropical sweetness.",
    },
  ],

  // 6. TOMATO
  Tomato: [
    {
      id: "tomato-cherry",
      name: "Sweet Cherry",
      title: "Fresh Vine Sweet Cherry Tomatoes",
      image: "/src/frontend/assets/images/products/tomato-cherry.jpg",
      thumb: "/src/frontend/assets/images/products/tomato-cherry.jpg",
      price: 160,
      weight: "1 kg",
      origin: "Bhaktapur, Nepal",
      seller: "Green Leaf Farm",
      description:
        "Plump, bite-sized cherry tomatoes picked fresh on the vine. Exploding with intense sweetness and crisp snap, ideal for salads and roasting.",
    },
    {
      id: "tomato-roma",
      name: "Hillside Roma",
      title: "Fresh Hillside Roma Tomato",
      image: "/src/frontend/assets/images/products/tomato.jpg",
      thumb: "/src/frontend/assets/images/products/tomato.jpg",
      price: 120,
      weight: "1 kg",
      origin: "Kavre, Nepal",
      seller: "Hillside Farm",
      description:
        "Firm, fleshy plum tomatoes with fewer seeds and low water content. The chef's choice for rich, savory gravies, curries, and sauces.",
    },
    {
      id: "tomato-beefsteak",
      name: "Beefsteak Big",
      title: "Juicy Slicing Beefsteak Tomato",
      image: "/src/frontend/assets/images/products/tomato-beefsteak.jpg",
      thumb: "/src/frontend/assets/images/products/tomato-beefsteak.jpg",
      price: 140,
      weight: "1 kg",
      origin: "Lalitpur, Nepal",
      seller: "Valley Farm Co.",
      description:
        "Hefty, multi-lobed red tomatoes packed with old-fashioned tomato flavor and juicy meat. Built for thick fresh burger and sandwich slices.",
    },
    {
      id: "tomato-golden",
      name: "Golden Heirloom",
      title: "Mild Golden Heirloom Tomato",
      image: "/src/frontend/assets/images/products/tomato-yellow.jpg",
      thumb: "/src/frontend/assets/images/products/tomato-yellow.jpg",
      price: 175,
      weight: "1 kg",
      origin: "Nuwakot, Nepal",
      seller: "Himalayan Organics",
      description:
        "Vibrant sunshine-yellow heirloom tomatoes with tender skin and a low-acid, sweet fruity profile that adds colorful elegance to salads.",
    },
  ],

  // 7. POTATO
  Potato: [
    {
      id: "potato-palpa",
      name: "Palpa Red",
      title: "Authentic Palpa Hill Red Potato",
      image: "/src/frontend/assets/images/products/potato-red.jpg",
      thumb: "/src/frontend/assets/images/products/potato-red.jpg",
      price: 90,
      weight: "1 kg",
      origin: "Palpa, Nepal",
      seller: "Mountain Harvest",
      description:
        "Renowned high-hill red potatoes with thin rosy skins and dense, waxy golden flesh. Holds shape beautifully in tarkaris and aloo dum.",
    },
    {
      id: "potato-yukon",
      name: "Yukon Gold",
      title: "Creamy Yukon Gold Potato",
      image: "/src/frontend/assets/images/products/potato-yukon.jpg",
      thumb: "/src/frontend/assets/images/products/potato-yukon.jpg",
      price: 95,
      weight: "1 kg",
      origin: "Kathmandu Valley",
      seller: "Local Organic Farm",
      description:
        "Naturally buttery golden flesh with a smooth velvety texture. Outstanding for silky mashed potatoes, boiling, and golden oven roasts.",
    },
    {
      id: "potato-russet",
      name: "Russet Classic",
      title: "Hearty Russet Baking Potato",
      image: "/src/frontend/assets/images/products/potato.jpg",
      thumb: "/src/frontend/assets/images/products/potato.jpg",
      price: 85,
      weight: "1 kg",
      origin: "Makwanpur, Nepal",
      seller: "Valley Fresh Farm",
      description:
        "High-starch russet potatoes with thick netted skins. Bakes up ultra-fluffy inside and fries into crisp, golden French fries and chips.",
    },
    {
      id: "potato-baby",
      name: "Baby Gourmet",
      title: "Tender Baby Fingerling Potatoes",
      image: "/src/frontend/assets/images/products/potato-baby.jpg",
      thumb: "/src/frontend/assets/images/products/potato-baby.jpg",
      price: 110,
      weight: "1 kg",
      origin: "Solukhumbu, Nepal",
      seller: "Highland Farmers",
      description:
        "Bite-sized, tender baby potatoes with delicate skins that require no peeling. Roasts to crispy perfection with rosemary and garlic butter.",
    },
  ],

  // 8. SPINACH
  Spinach: [
    {
      id: "spinach-local",
      name: "Local Palak",
      title: "Fresh Farm Nepali Palak Saag",
      image: "/src/frontend/assets/images/products/spinach.jpg",
      thumb: "/src/frontend/assets/images/products/spinach.jpg",
      price: 80,
      weight: "500 g",
      origin: "Bhaktapur, Nepal",
      seller: "Green Leaf Farm",
      description:
        "Tender broad-leafed organic spinach harvested fresh at dawn. Loaded with plant iron, folate, and vitamins for nutritious daily meals.",
    },
    {
      id: "spinach-baby",
      name: "Baby Spinach",
      title: "Sweet Tender Baby Spinach Leaves",
      image: "/src/frontend/assets/images/products/spinach-baby.jpg",
      thumb: "/src/frontend/assets/images/products/spinach-baby.jpg",
      price: 110,
      weight: "500 g",
      origin: "Kavre, Nepal",
      seller: "Organic Valley",
      description:
        "Young, delicate, bite-sized spinach leaves with a sweet mild flavor. Ready to eat raw in salads, green smoothies, or quick pasta tosses.",
    },
    {
      id: "spinach-savoy",
      name: "Savoy Crinkle",
      title: "Deep Green Savoy Mountain Spinach",
      image: "/src/frontend/assets/images/products/spinach-savoy.jpg",
      thumb: "/src/frontend/assets/images/products/spinach-savoy.jpg",
      price: 90,
      weight: "500 g",
      origin: "Nuwakot, Nepal",
      seller: "Himalaya Farm",
      description:
        "Heirloom cold-hardy spinach with deep crinkled leaves. Holds up robustly to cooking, sautéing with garlic, and paneer curries.",
    },
    {
      id: "spinach-malabar",
      name: "Pui Saag",
      title: "Succulent Malabar Vine Spinach",
      image: "/src/frontend/assets/images/products/spinach-pui.jpg",
      thumb: "/src/frontend/assets/images/products/spinach-pui.jpg",
      price: 85,
      weight: "500 g",
      origin: "Chitwan, Nepal",
      seller: "Terai Green Agro",
      description:
        "Thick, fleshy, glossy green vine leaves rich in dietary fiber and soothing mucilage. Delicious in traditional dal and vegetable stews.",
    },
  ],

  // 9. TURMERIC
  Turmeric: [
    {
      id: "turmeric-ilam",
      name: "Ilam Raw Root",
      title: "Organic Ilam Raw Turmeric Rhizome",
      image: "/src/frontend/assets/images/products/turmeric-root.jpg",
      thumb: "/src/frontend/assets/images/products/turmeric-root.jpg",
      price: 220,
      weight: "250 g",
      origin: "Ilam, Nepal",
      seller: "Spice Garden",
      description:
        "Freshly dug knobby turmeric roots from the organic hills of Ilam. Contains maximum natural curcumin, essential oils, and intense earthy warmth.",
    },
    {
      id: "turmeric-kasturi",
      name: "Kasturi Golden",
      title: "Aromatic Kasturi Manjal Turmeric",
      image: "/src/frontend/assets/images/products/turmeric-kasturi.jpg",
      thumb: "/src/frontend/assets/images/products/turmeric-kasturi.jpg",
      price: 260,
      weight: "250 g",
      origin: "Sindhuli, Nepal",
      seller: "Ayur Herbs",
      description:
        "Rare highly fragrant wild golden turmeric famed in traditional skincare and immunity broths for its non-staining, soothing qualities.",
    },
    {
      id: "turmeric-ground",
      name: "Stone Ground",
      title: "Stone-Ground Pure Turmeric Powder",
      image: "/src/frontend/assets/images/products/turmeric.jpg",
      thumb: "/src/frontend/assets/images/products/turmeric.jpg",
      price: 190,
      weight: "250 g",
      origin: "Dang, Nepal",
      seller: "Aroma Spices",
      description:
        "Clean, sun-dried fingers slowly ground at low temperatures in a water mill to preserve natural volatile oils, bright golden hue, and potency.",
    },
    {
      id: "turmeric-black",
      name: "Black Turmeric",
      title: "Rare Medicinal Kali Haldi Root",
      image: "/src/frontend/assets/images/products/turmeric-black.jpg",
      thumb: "/src/frontend/assets/images/products/turmeric-black.jpg",
      price: 350,
      weight: "250 g",
      origin: "Mustang, Nepal",
      seller: "Highland Herbs",
      description:
        "Extremely prized bluish-black rhizome revered in Himalayan medicine for deep joint wellness, inflammation support, and vitality.",
    },
  ],

  // 10. CHILI
  Chili: [
    {
      id: "chili-dalle",
      name: "Dalle Khursani",
      title: "Fiery Dalle Khursani Cherry Pepper",
      image: "/src/frontend/assets/images/products/chili-dalle.jpg",
      thumb: "/src/frontend/assets/images/products/chili-dalle.jpg",
      price: 210,
      weight: "200 g",
      origin: "Sikkim & Ilam Border",
      seller: "Spice Garden",
      description:
        "The king of Himalayan peppers! Round, cherry-sized explosive red chilis celebrated for their fiery Scoville punch and mouthwatering aroma.",
    },
    {
      id: "chili-jwala",
      name: "Jwala Green",
      title: "Fresh Sharp Jwala Green Chili",
      image: "/src/frontend/assets/images/products/chili.jpg",
      thumb: "/src/frontend/assets/images/products/chili.jpg",
      price: 160,
      weight: "200 g",
      origin: "Dang, Nepal",
      seller: "Aroma Spices",
      description:
        "Long, slender, vibrant green peppers that deliver an instant, clean, zesty heat to everyday dal bhat, curries, and fresh chutneys.",
    },
    {
      id: "chili-akabare",
      name: "Akabare Red",
      title: "Pungent Akabare Long Chili",
      image: "/src/frontend/assets/images/products/chili-akabare.jpg",
      thumb: "/src/frontend/assets/images/products/chili-akabare.jpg",
      price: 190,
      weight: "200 g",
      origin: "Dhankuta, Nepal",
      seller: "Eastern Agro Co.",
      description:
        "Crimson-red matured chili with deep smoky heat and natural oils. A staple ingredient for pickles, hot sauces, and spicy momo achar.",
    },
    {
      id: "chili-birds-eye",
      name: "Bird's Eye",
      title: "Tiny Bird's Eye Hot Chili",
      image: "/src/frontend/assets/images/products/chili-birds-eye.jpg",
      thumb: "/src/frontend/assets/images/products/chili-birds-eye.jpg",
      price: 180,
      weight: "200 g",
      origin: "Chitwan, Nepal",
      seller: "Valley Spices",
      description:
        "Small, pointed, fiercely potent chilis favored in soups and stir-fries. A single pod infuses complex warmth and lasting spice.",
    },
  ],

  // 11. CUMIN
  Cumin: [
    {
      id: "cumin-whole",
      name: "Whole Jeera",
      title: "Premium Whole Fragrant Cumin Seeds",
      image: "/src/frontend/assets/images/products/cumin.jpg",
      thumb: "/src/frontend/assets/images/products/cumin.jpg",
      price: 190,
      weight: "200 g",
      origin: "Nepalgunj, Nepal",
      seller: "Spice Garden",
      description:
        "Sun-dried whole cumin seeds with prominent ridges and high essential oil content. Crackles with rich nutty fragrance when tempered in ghee.",
    },
    {
      id: "cumin-shahi",
      name: "Shahi Jeera",
      title: "Royal Wild Black Cumin",
      image: "/src/frontend/assets/images/products/cumin-shahi.jpg",
      thumb: "/src/frontend/assets/images/products/cumin-shahi.jpg",
      price: 260,
      weight: "200 g",
      origin: "Jumla, Nepal",
      seller: "Highland Spice",
      description:
        "Slender, darker mountain cumin seeds with a refined sweet, herbal, almost caraway-like aroma reserved for biryanis and special festive dishes.",
    },
    {
      id: "cumin-roasted",
      name: "Roasted Jeera",
      title: "Slow-Roasted Aromatic Cumin Seeds",
      image: "/src/frontend/assets/images/products/cumin-roasted.jpg",
      thumb: "/src/frontend/assets/images/products/cumin-roasted.jpg",
      price: 210,
      weight: "200 g",
      origin: "Dang, Nepal",
      seller: "Aroma Spices",
      description:
        "Artisanally slow-roasted over low heat until deeply browned and nutty. Crushes easily over raita, salads, and chaats for instant flavor.",
    },
    {
      id: "cumin-ground",
      name: "Ground Powder",
      title: "Fresh Stone-Ground Cumin Powder",
      image: "/src/frontend/assets/images/products/cumin-powder.jpg",
      thumb: "/src/frontend/assets/images/products/cumin-powder.jpg",
      price: 180,
      weight: "200 g",
      origin: "Ilam, Nepal",
      seller: "Spice Garden",
      description:
        "Freshly ground from 100% whole cumin seeds without any fillers. Imparts warm, savory depth to all vegetarian curries and lentil soups.",
    },
  ],

  // 12. MILK
  Milk: [
    {
      id: "milk-cow",
      name: "Pure Cow Milk",
      title: "Farm Fresh Pasteurized Cow Milk",
      image: "/src/frontend/assets/images/products/milk.jpg",
      thumb: "/src/frontend/assets/images/products/milk.jpg",
      price: 110,
      weight: "1 litre",
      origin: "Chitwan, Nepal",
      seller: "Local Dairy",
      description:
        "Wholesome, naturally sweet whole milk collected twice daily from healthy pasture-grazed cows. Gentle, light, and easy to digest.",
    },
    {
      id: "milk-buffalo",
      name: "Buffalo Milk",
      title: "Rich Full-Cream Buffalo Milk",
      image: "/src/frontend/assets/images/products/milk-buffalo.jpg",
      thumb: "/src/frontend/assets/images/products/milk-buffalo.jpg",
      price: 130,
      weight: "1 litre",
      origin: "Nawalparasi, Nepal",
      seller: "Terai Dairy Co.",
      description:
        "Thick, velvety milk with a natural fat content of 6-7%. Ideal for boiling golden milk tea, making rich homemade paneer, and thick dahi.",
    },
    {
      id: "milk-toned",
      name: "Toned Light",
      title: "Low-Fat Pasteurised Toned Milk",
      image: "/src/frontend/assets/images/products/milk-toned.jpg",
      thumb: "/src/frontend/assets/images/products/milk-toned.jpg",
      price: 95,
      weight: "1 litre",
      origin: "Kathmandu Valley",
      seller: "Valley Fresh Dairy",
      description:
        "Balanced daily milk with reduced fat (3%) while retaining all natural proteins and calcium. Perfect for health-conscious morning coffee and cereals.",
    },
    {
      id: "milk-a2",
      name: "A2 Desi Farm",
      title: "Native Breed Organic A2 Milk",
      image: "/src/frontend/assets/images/products/milk-a2.jpg",
      thumb: "/src/frontend/assets/images/products/milk-a2.jpg",
      price: 160,
      weight: "1 litre",
      origin: "Kavre, Nepal",
      seller: "Himalaya Native Dairy",
      description:
        "Pure A2 beta-casein milk sourced exclusively from native indigenous hill cows fed on natural mountain fodder and pesticide-free grass.",
    },
  ],

  // 13. EGGS
  Eggs: [
    {
      id: "eggs-brown",
      name: "Farm Brown",
      title: "Free-Range Farm Brown Eggs",
      image: "/src/frontend/assets/images/products/eggs.jpg",
      thumb: "/src/frontend/assets/images/products/eggs.jpg",
      price: 240,
      weight: "12 pcs",
      origin: "Nuwakot, Nepal",
      seller: "Farm Fresh Dairy",
      description:
        "Farm-fresh brown eggs laid by cage-free hens raised on sunshine and clean grains. Features thick sturdy shells and deep orange yolks.",
    },
    {
      id: "eggs-white",
      name: "Classic White",
      title: "Fresh Grade-A White Eggs",
      image: "/src/frontend/assets/images/products/eggs-white.jpg",
      thumb: "/src/frontend/assets/images/products/eggs-white.jpg",
      price: 210,
      weight: "12 pcs",
      origin: "Chitwan, Nepal",
      seller: "Valley Poultry",
      description:
        "High-quality, clean white eggs with high protein content and consistent freshness. The reliable daily choice for baking, boiling, and omelettes.",
    },
    {
      id: "eggs-omega",
      name: "Omega-3 Enriched",
      title: "Organic Omega-3 Enriched Eggs",
      image: "/src/frontend/assets/images/products/eggs-omega.jpg",
      thumb: "/src/frontend/assets/images/products/eggs-omega.jpg",
      price: 280,
      weight: "12 pcs",
      origin: "Kavre, Nepal",
      seller: "Green Harvest",
      description:
        "Laid by hens fed on flaxseed and natural kelp meal. Delivers 3x more essential fatty acids for cardiovascular and brain wellness.",
    },
    {
      id: "eggs-country",
      name: "Village Heritage",
      title: "Local Village Country Eggs",
      image: "/src/frontend/assets/images/products/eggs-village.jpg",
      thumb: "/src/frontend/assets/images/products/eggs-village.jpg",
      price: 320,
      weight: "12 pcs",
      origin: "Dhading, Nepal",
      seller: "Village Farmer Co-op",
      description:
        "Traditional small-batch village poultry eggs from free-roaming local chickens. Highly rich in flavor, dense whites, and vibrant golden yolks.",
    },
  ],

  // 14. YOGURT
  Yogurt: [
    {
      id: "yogurt-juju",
      name: "Juju Dhau",
      title: "Bhaktapur King Curd (Juju Dhau)",
      image: "/src/frontend/assets/images/products/yogurt-juju-dhau.jpg",
      thumb: "/src/frontend/assets/images/products/yogurt-juju-dhau.jpg",
      price: 180,
      weight: "500 g",
      origin: "Bhaktapur, Nepal",
      seller: "Bhaktapur Dairy Guild",
      description:
        "The legendary 'King of Curd'! Made by master Newari artisans in clay pots using boiled buffalo milk infused with cloves, cardamoms, and natural sweetness.",
    },
    {
      id: "yogurt-set",
      name: "Set Curd",
      title: "Fresh Traditional Whole Milk Dahi",
      image: "/src/frontend/assets/images/products/yogurt-curd.jpg",
      thumb: "/src/frontend/assets/images/products/yogurt-curd.jpg",
      price: 130,
      weight: "500 g",
      origin: "Kathmandu, Nepal",
      seller: "Local Dairy",
      description:
        "Homestyle thick curd cultured slowly overnight. Mildly tart and naturally creamy, excellent for cooling meals, raita, and lassi.",
    },
    {
      id: "yogurt-greek",
      name: "Greek Style",
      title: "High-Protein Strained Greek Yogurt",
      image: "/src/frontend/assets/images/products/yogurt-greek.jpg",
      thumb: "/src/frontend/assets/images/products/yogurt-greek.jpg",
      price: 195,
      weight: "500 g",
      origin: "Lalitpur, Nepal",
      seller: "Valley Artisans",
      description:
        "Triple-strained to remove excess whey, resulting in an exceptionally thick, spoonable texture packed with 12g of protein per serving.",
    },
    {
      id: "yogurt-probiotic",
      name: "Probiotic Light",
      title: "Gut-Friendly Probiotic Yogurt",
      image: "/src/frontend/assets/images/products/yogurt-probiotic.jpg",
      thumb: "/src/frontend/assets/images/products/yogurt-probiotic.jpg",
      price: 140,
      weight: "500 g",
      origin: "Chitwan, Nepal",
      seller: "Green Valley Dairy",
      description:
        "Smooth, light yogurt enriched with active live cultures including Lactobacillus acidophilus to promote digestive balance and vitality.",
    },
  ],

  // 15. RICE
  Rice: [
    {
      id: "rice-marsi",
      name: "Jumla Marsi",
      title: "Authentic Himalayan Jumla Marsi Red Rice",
      image: "/src/frontend/assets/images/products/rice-jumla-marsi.jpg",
      thumb: "/src/frontend/assets/images/products/rice-jumla-marsi.jpg",
      price: 1200,
      weight: "5 kg",
      origin: "Jumla, Nepal",
      seller: "Highland Organics",
      description:
        "Grown at 3,000 meters above sea level with glacier meltwater. Rich in iron, zinc, and antioxidants, with an irreplaceable nutty, earthy taste.",
    },
    {
      id: "rice-basmati",
      name: "Royal Basmati",
      title: "Aged Long-Grain Himalayan Basmati",
      image: "/src/frontend/assets/images/products/rice-basmati.jpg",
      thumb: "/src/frontend/assets/images/products/rice-basmati.jpg",
      price: 950,
      weight: "5 kg",
      origin: "Jhapa, Nepal",
      seller: "Golden Grain",
      description:
        "Naturally aged for two years. Grains elongate to double their length upon cooking, remaining non-sticky, fluffy, and intoxicatingly aromatic.",
    },
    {
      id: "rice-pokhreli",
      name: "Pokhreli Masino",
      title: "Fine Pokhreli Masino Table Rice",
      image: "/src/frontend/assets/images/products/rice-pokhreli.jpg",
      thumb: "/src/frontend/assets/images/products/rice-pokhreli.jpg",
      price: 820,
      weight: "5 kg",
      origin: "Kaski, Nepal",
      seller: "Annapurna Grain Co.",
      description:
        "Slender, delicate daily staple rice from the terraced paddies of Pokhara. Soft, easily digestible, and comforting with any dal and curry.",
    },
    {
      id: "rice-sticky",
      name: "Aromatic Sweet",
      title: "Fragrant Sticky Highland Rice",
      image: "/src/frontend/assets/images/products/rice-brown.jpg",
      thumb: "/src/frontend/assets/images/products/rice-brown.jpg",
      price: 880,
      weight: "5 kg",
      origin: "Solukhumbu, Nepal",
      seller: "Mountain Harvest",
      description:
        "Tender short-grain rice with a comforting natural sweetness and cohesive texture. Ideal for traditional kheer, rice puddings, and dumplings.",
    },
  ],

  // 16. WHEAT
  Wheat: [
    {
      id: "wheat-chakki",
      name: "Chakki Atta",
      title: "100% Stone-Ground Whole Wheat Atta",
      image: "/src/frontend/assets/images/products/wheat-chakki.jpg",
      thumb: "/src/frontend/assets/images/products/wheat-chakki.jpg",
      price: 780,
      weight: "5 kg",
      origin: "Dang, Nepal",
      seller: "Harvest Mill",
      description:
        "Milled slowly on traditional stone chakkis to retain all bran, germ, and endosperm nutrients. Yields soft, puffed rotis that stay tender all day.",
    },
    {
      id: "wheat-sharbati",
      name: "Sharbati Gold",
      title: "Golden Sharbati Grain Wheat Flour",
      image: "/src/frontend/assets/images/products/wheat.jpg",
      thumb: "/src/frontend/assets/images/products/wheat.jpg",
      price: 850,
      weight: "5 kg",
      origin: "Kapilvastu, Nepal",
      seller: "Golden Grain Mill",
      description:
        "Cultivated in sun-drenched fertile terai plains. Heavy, golden grains with high natural sweetness that create sweet, fragrant chapatis.",
    },
    {
      id: "wheat-durum",
      name: "Durum Semolina",
      title: "Organic Durum Wheat Suji",
      image: "/src/frontend/assets/images/products/wheat-semolina.jpg",
      thumb: "/src/frontend/assets/images/products/wheat-semolina.jpg",
      price: 800,
      weight: "5 kg",
      origin: "Rupandehi, Nepal",
      seller: "Valley Mills",
      description:
        "Hard amber durum wheat coarsely milled into pristine semolina. Excellent for making wholesome halwa, upma, and artisanal homemade pastas.",
    },
    {
      id: "wheat-multigrain",
      name: "Multi-Grain Blend",
      title: "Nutritious 7-Grain Harvest Flour",
      image: "/src/frontend/assets/images/products/wheat-multigrain.jpg",
      thumb: "/src/frontend/assets/images/products/wheat-multigrain.jpg",
      price: 920,
      weight: "5 kg",
      origin: "Palpa, Nepal",
      seller: "Hillside Farm",
      description:
        "Wholesome wheat balanced with highland barley, roasted chana, oats, soybean, and millet for a low-GI, high-fiber dietary powerhouse.",
    },
  ],

  // 17. LENTILS
  Lentils: [
    {
      id: "lentils-masoor",
      name: "Red Masoor",
      title: "Split Red Masoor Dal (Lentils)",
      image: "/src/frontend/assets/images/products/lentils-masoor.jpg",
      thumb: "/src/frontend/assets/images/products/lentils-masoor.jpg",
      price: 280,
      weight: "1 kg",
      origin: "Siraha, Nepal",
      seller: "Golden Grain",
      description:
        "Quick-cooking split red lentils without skins. Melts into a velvety, golden dal that absorbs cumin and garlic tadka to sheer perfection.",
    },
    {
      id: "lentils-moong",
      name: "Yellow Moong",
      title: "Organic Split Yellow Moong Dal",
      image: "/src/frontend/assets/images/products/lentils-moong.jpg",
      thumb: "/src/frontend/assets/images/products/lentils-moong.jpg",
      price: 290,
      weight: "1 kg",
      origin: "Chitwan, Nepal",
      seller: "Valley Agro",
      description:
        "Gentle, light, and soothing on digestion. Packed with clean plant protein and essential iron; the supreme comfort food for everyday well-being.",
    },
    {
      id: "lentils-chana",
      name: "Bengal Chana",
      title: "Hearty Split Chana Dal",
      image: "/src/frontend/assets/images/products/lentils-chana.jpg",
      thumb: "/src/frontend/assets/images/products/lentils-chana.jpg",
      price: 260,
      weight: "1 kg",
      origin: "Banke, Nepal",
      seller: "Terai Spice & Grain",
      description:
        "Substantial split chickpeas with a sweet, nutty bite. Retains firm texture in curries and cooks into deeply flavorful thick dal.",
    },
    {
      id: "lentils-urad",
      name: "Black Urad",
      title: "Whole Black Mountain Urad Dal",
      image: "/src/frontend/assets/images/products/lentils-urad.jpg",
      thumb: "/src/frontend/assets/images/products/lentils-urad.jpg",
      price: 310,
      weight: "1 kg",
      origin: "Nuwakot, Nepal",
      seller: "Himalaya Farm",
      description:
        "Rich, dark, earthy whole lentils celebrated in authentic Dal Makhani and traditional Newari black lentil patties (Bara).",
    },
  ],
};

/**
 * Returns 4 rich varieties for any product based on its name or category.
 */
export function getProductVarieties(product: {
  id: string;
  name: string;
  category?: string;
  price?: number;
  weight?: string;
  origin?: string;
  seller?: string;
  image?: string;
  gallery?: string[];
}): ProductVariety[] {
  const name = product.name || "";
  const normalized = name.toLowerCase().trim();

  // 1. Direct key match
  for (const [key, list] of Object.entries(productVarietiesMap)) {
    if (normalized.includes(key.toLowerCase())) {
      return list;
    }
  }

  // 2. Keyword fallback checks
  if (normalized.includes("apple") || normalized.includes("seb")) {
    return productVarietiesMap.Apple;
  }
  if (normalized.includes("honey") || normalized.includes("maha")) {
    return productVarietiesMap.Honey;
  }
  if (normalized.includes("orange") || normalized.includes("suntala")) {
    return productVarietiesMap.Orange;
  }
  if (normalized.includes("avocado")) {
    return productVarietiesMap.Avocado;
  }
  if (normalized.includes("banana") || normalized.includes("kera")) {
    return productVarietiesMap.Banana;
  }
  if (normalized.includes("tomato") || normalized.includes("golbheda")) {
    return productVarietiesMap.Tomato;
  }
  if (normalized.includes("potato") || normalized.includes("alu")) {
    return productVarietiesMap.Potato;
  }
  if (normalized.includes("spinach") || normalized.includes("palak")) {
    return productVarietiesMap.Spinach;
  }
  if (normalized.includes("turmeric") || normalized.includes("haldi") || normalized.includes("besar")) {
    return productVarietiesMap.Turmeric;
  }
  if (normalized.includes("chili") || normalized.includes("chilli") || normalized.includes("khursani")) {
    return productVarietiesMap.Chili;
  }
  if (normalized.includes("cumin") || normalized.includes("jeera")) {
    return productVarietiesMap.Cumin;
  }
  if (normalized.includes("milk") || normalized.includes("dudh")) {
    return productVarietiesMap.Milk;
  }
  if (normalized.includes("egg")) {
    return productVarietiesMap.Eggs;
  }
  if (normalized.includes("yogurt") || normalized.includes("curd") || normalized.includes("dahi")) {
    return productVarietiesMap.Yogurt;
  }
  if (normalized.includes("rice") || normalized.includes("chamal")) {
    return productVarietiesMap.Rice;
  }
  if (normalized.includes("wheat") || normalized.includes("atta")) {
    return productVarietiesMap.Wheat;
  }
  if (normalized.includes("lentil") || normalized.includes("dal")) {
    return productVarietiesMap.Lentils;
  }

  // 3. Category match fallback
  const category = (product.category || "").toLowerCase();
  if (category.includes("fruit")) return productVarietiesMap.Apple;
  if (category.includes("veg")) return productVarietiesMap.Tomato;
  if (category.includes("spice")) return productVarietiesMap.Chili;
  if (category.includes("dairy")) return productVarietiesMap.Milk;
  if (category.includes("grain")) return productVarietiesMap.Rice;
  if (category.includes("honey")) return productVarietiesMap.Honey;

  // 4. Fallback: generate 4 cubes from the product's own details
  const baseImg = product.image || "/src/frontend/assets/images/organic-vegetables.jpg";
  const gallery = product.gallery && product.gallery.length > 0 ? product.gallery : [baseImg];
  return [
    {
      id: `${product.id}-v1`,
      name: "Organic Standard",
      title: product.name,
      image: gallery[0] || baseImg,
      thumb: gallery[0] || baseImg,
      price: product.price || 150,
      weight: product.weight || "1 kg",
      origin: product.origin || "Nepal",
      seller: product.seller || "Local Farm",
      description: `${product.name} sourced fresh from trusted local growers using natural farming practices.`,
    },
    {
      id: `${product.id}-v2`,
      name: "Premium Select",
      title: `Premium ${product.name}`,
      image: gallery[1 % gallery.length] || baseImg,
      thumb: gallery[1 % gallery.length] || baseImg,
      price: Math.round((product.price || 150) * 1.1),
      weight: product.weight || "1 kg",
      origin: product.origin || "Nepal",
      seller: product.seller || "Local Farm",
      description: `Handpicked grade-A selection of ${product.name} offering supreme freshness and flavor.`,
    },
    {
      id: `${product.id}-v3`,
      name: "Highland Harvest",
      title: `Highland ${product.name}`,
      image: gallery[2 % gallery.length] || baseImg,
      thumb: gallery[2 % gallery.length] || baseImg,
      price: Math.round((product.price || 150) * 1.15),
      weight: product.weight || "1 kg",
      origin: "Mustang, Nepal",
      seller: "Highland Orchards",
      description: `Grown in clean Himalayan air with mountain spring water for authentic purity.`,
    },
    {
      id: `${product.id}-v4`,
      name: "Valley Fresh",
      title: `Valley Fresh ${product.name}`,
      image: gallery[3 % gallery.length] || baseImg,
      thumb: gallery[3 % gallery.length] || baseImg,
      price: Math.round((product.price || 150) * 1.05),
      weight: product.weight || "1 kg",
      origin: "Chitwan, Nepal",
      seller: "Valley Fresh",
      description: `Sun-kissed, tender ${product.name} delivered straight from valley farms to your table.`,
    },
  ];
}
