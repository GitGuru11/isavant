import React, { useState, useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";
import Header from "../Header";
import Card from "../Card";
import Order from "../Order";
import "./style.css";
import Character from "../../resources/imgs/character.svg";
import Down from "../../resources/imgs/down.svg";
import Flat from "../../resources/imgs/flat.svg";
import Flower from "../../resources/imgs/flower.svg";
import H2O from "../../resources/imgs/H2O.svg";
import Woman from "../../resources/imgs/woman.svg";
import Swipe from "../../components/Swipe";
import Shake from "../../resources/imgs/shake.svg";
import Brain from "../../resources/imgs/brain.svg";
import Cloud from "../../resources/imgs/cloud.svg";
import StudentWoman from "../../resources/imgs/student-woman.svg";
import StudentMan from "../../resources/imgs/student-man.svg";
import Recorder from "../../resources/imgs/recorder.svg";
import Sofa from "../../resources/imgs/sofa.svg";
import StudentMan2 from "../../resources/imgs/student-man2.svg";
import Sofa2 from "../../resources/imgs/sofa2.svg";
import Fruits from "../../resources/imgs/Fruits.svg";
import Vegetables from "../../resources/imgs/vegetables.svg";
import Grain from "../../resources/imgs/grain.svg";
import Pipe from "../../resources/imgs/pipe.svg";
import Item from "../../components/Good";
//import cards images
import Bread from "../../resources/imgs/bread.svg";
import Herbicide from "../../resources/imgs/herbicide.svg";
import Metal from "../../resources/imgs/metal.svg";
import Pesticide from "../../resources/imgs/pesticide.svg";
import Plastic from "../../resources/imgs/plastic.svg";

//import Items
import Digestive from "../../resources/imgs/digestive.svg";
import Nervous from "../../resources/imgs/nervous.svg";
import Endocrine from "../../resources/imgs/endocrine.svg";
import Respiratory from "../../resources/imgs/respiratory.svg";
import Circulatory from "../../resources/imgs/circulatory.svg";
import Lymphatic from "../../resources/imgs/lymphatic.svg";
import Reproductive from "../../resources/imgs/Reproductive.svg";
import Urinary from "../../resources/imgs/urinary.svg";

export default function Index() {
  const [back, setBack] = useState("#f3f3f3");
  const [cards, setCards] = useState([
    { imgUrl: Bread, content: "Processed food/sugar" },
    { imgUrl: Herbicide, content: "Herbicides" },
    { imgUrl: Metal, content: "Heavy metals in food" },
    { imgUrl: Pesticide, content: "Pesticides" },
    { imgUrl: Plastic, content: "Pesticides" },
  ]);
  const [cards2, setCards2] = useState([
    { imgUrl: Fruits, content: "Fruits" },
    { imgUrl: Vegetables, content: "Vegetables" },
    { imgUrl: Grain, content: "Nom-glutinous grains" },
  ]);
  const [items, setItems] = useState([
    { imgUrl: Digestive, content: "Digestive system" },
    { imgUrl: Nervous, content: "Nervous system" },
    { imgUrl: Endocrine, content: "Endocrine system" },
    { imgUrl: Respiratory, content: "Respiratory system" },
    { imgUrl: Circulatory, content: "Circulatory system" },
    { imgUrl: Lymphatic, content: "Lymphatic system" },
    { imgUrl: Reproductive, content: "Reproductive system" },
    { imgUrl: Urinary, content: "Urinary system" },
  ]);

  const [cardData, setCardData] = useState([
    [
      {
        title:
          "How Much Time Do Americans Spend Indoors and Why Does It Matter?",
        content: [
          "Americans spend 90% of their time in doors.",
          "Unlike outdoor air, which nature cleans through ionization, indoor air is inherently stale and requires appropriate filtration and ventilation to be healthy to breathe.",
        ],
      },
      {
        title: "What Causes Poor Indoor Air Quality?",
        content: [
          "Poor ventilation and filtration in homes, workplaces, and schools cause chemical VOCs from wall cavities and pollutants from outside (including wildfire smoke) to accumulate indoors.",
        ],
      },
      {
        title: "How Have Microbial Colonies Proliferated Indoors?",
        content: [
          "Harmful microbes, such as actinobacteria and endotoxin-producing gram-negative bacteria, have proliferated indoors in Water Damaged Buildings (WDBs) since the introduction of fungicidal paint in the 1970s, which disrupted the natural indoor micro-ecosystem.",
          "An estimated 80% of buildings in the US are colonized by these toxin-producing microbes.",
        ],
      },
    ],
  ]);

  const [data, setData] = useState([
    {
      title: "Toxic gut and sinuses",
      iconUrl: H2O,
      content: [
        {
          title:
            "What are Anti-Inflammatory Hormones and How Do They Protect Mucosal Membranes?",
          content: [
            "Anti-inflammatory hormones like Melanocyte-Stimulating Hormone (MSH) and Vasoactive Intestinal Peptide (VIP) protect the mucosal membranes of the body. These hormones help maintain the integrity of mucosal barriers and play a crucial role in calming inflammation.",
          ],
        },
        {
          title:
            "How Does Persistent Toxin Exposure Affect Anti-Inflammatory Hormones?",
          content: [
            "When the body is persistently exposed to toxins, anti-inflammatory hormones like MSH and VIP get depleted as they attempt to calm the body down. This depletion allows microbial colonists to invade mucosal membranes and start producing their own toxins.",
          ],
        },
        {
          title: "What Happens When Microbial Invaders Produce Toxins?",
          content: [
            "The toxins produced by microbial invaders further lower levels of MSH and VIP. This ensures a favorable environment for the microbes, exacerbating the inflammatory symptoms experienced by the host.",
          ],
        },
        {
          title:
            "How Does Flawed Conventional Wisdom Affect Gut and Sinus Problems?",
          content: [
            "Flawed conventional wisdom, such as the belief that an individual's psychology is the primary cause of conditions like Inflammatory Bowel Syndrome (IBS), exacerbates the stress individuals experience. This additional stress compounds the elevated toxin load their brains and bodies are already coping with, worsening their symptoms.",
          ],
        },
        {
          title: "How Does Global Air Quality Affect Human Health?",
          content: [
            "The World Health Organization released a study indicating that only 1% of the global human population consistently breathes air that is suitable for human health.",
          ],
        },
        {
          title: "Links to Relevant Information:",
          content: [],
          links: [
            "Research on Anti-Inflammatory Hormones and Mucosal Membranes",
            "Study on MSH and Allergic Reactions",
            "Research on VIP and Inflammatory Responses",
          ],
        },
      ],
      imgUrl: StudentWoman,
    },
    {
      title: "Toxic psychology & physiology",
      iconUrl: H2O,
      content: [
        {
          title:
            "How Does Chronic Toxin Exposure Affect the Brain and Immune System?",
          content: [
            "Chronic toxin exposure puts the brain and immune system in chronically inflamed states. This persistent inflammation affects overall health and well-being.",
          ],
        },
        {
          title: "What are the Effects of Chronically Activated Neurology?",
          content: [
            "Chronically 'activated' (inflamed) neurology results in a loss of the ability to think from other perspectives and cripples self-awareness. This state hinders cognitive flexibility and emotional insight.",
          ],
        },
        {
          title:
            "How Do Nervous and Immune Systems Respond to Chronic Inflammation?",
          content: [
            "Nervous and immune systems stuck in a low-grade fight-or-flight response become sensitized and exhausted. This prolonged state of activation depletes the body's resources and resilience.",
          ],
        },
        {
          title:
            "How Do Individuals Misinterpret Symptoms of Chronic Neuro-Inflammation?",
          content: [
            "Over time, individuals typically associate symptoms of chronic neuro-inflammation with aspects of their personality and ignore or suppress feelings of insecurity that are triggering Stress Monster behaviors. This misinterpretation prevents effective coping and healing.",
          ],
        },
        {
          title: "Why is Chronic Inflammation Hard to Recognize?",
          content: [
            "The gradual onset of chronic inflammation makes it challenging for individuals to recognize that the energy centers of the cells in their body have entered a state of hypo-metabolism, contributing to chronic fatigue. This slow progression masks the severity of the issue.",
          ],
        },
        {
          title: "How Does Leptin Resistance Develop and Affect Weight?",
          content: [
            "In this state, many individuals develop leptin resistance, which leads to unhealthy weight gain and makes it hard to lose fat. Because non-specialists fail to see the underlying problem, individuals blame themselves for their problems with weight, increasing neurological stress.",
          ],
        },
        {
          title: "Links to Relevant Information:",
          content: [],
          links: [
            "Insights Based on Polyvagal Theory",
            "Impact of Chronic Toxin Exposure on Brain and Immune System",
            "Effects of Chronically Activated Neurology",
            "Nervous and Immune Systems' Response to Inflammation",
            "Understanding Leptin Resistance and Weight Gain",
          ],
        },
      ],
      imgUrl: StudentMan,
    },
    {
      title: "Toxic relationships",
      iconUrl: Shake,
      content: [
        {
          title: "How Do Societal Norms Affect Cognitive and Emotional Health?",
          content: [
            "Societal norms make masking cognitive and emotional distress necessary for an individual's stability and survival. This additional mental effort, and the downstream consequence of feeling alienated from oneself, compounds neurological stress.",
          ],
        },
        {
          title:
            "How Do Challenges with Self-Awareness Affect Personal Responsibility?",
          content: [
            "Chronic challenges with self-awareness make taking personal responsibility for the implications of mood and cognitive dysregulation difficult, which can devastate healthy relationships. This lack of responsibility hinders emotional growth and relationship stability.",
          ],
        },
        {
          title:
            "How Do Challenges with Multi-Perspective Thinking Affect Relationships?",
          content: [
            "Chronic challenges with multi-perspective thinking can result in communication and behaviors that alienate others and rupture relationships. This inability to see from others' perspectives creates barriers to understanding and connection.",
          ],
        },
        {
          title:
            "What are the Consequences of Alienation and Ruptured Relationships?",
          content: [
            "Alienation and rupture in relationships tend to result in feelings of loneliness, despair, and insecurity. These negative emotions deepen the sense of disconnection and emotional pain.",
          ],
        },
        {
          title: "How Do Negative Emotions Affect Physical Health?",
          content: [
            "Loneliness, despair, and insecurity are associated with high rates of illness and early mortality. These emotions themselves become sources of chronic inflammation for the brain, further impacting overall health.",
          ],
        },
        {
          title: "Links to Relevant Information:",
          content: [],
          links: [
            "Insights Based on Internal Family Systems",
            "Impact of Societal Norms on Mental Health",
            "Challenges with Self-Awareness and Relationships",
            "Multi-Perspective Thinking and Relationship Health",
            "Consequences of Alienation and Negative Emotions",
          ],
        },
      ],
      imgUrl: Recorder,
    },
    {
      title: "Toxic “learning”",
      iconUrl: Brain,
      content: [
        {
          title: "How Does Chronic Neuroinflammation Affect Learning?",
          content: [
            "Chronic neuroinflammation impacts multi-perspective thinking, self-awareness, and short-term and working memory, making it extremely challenging to learn anything that breaks with familiar frameworks. This condition restricts learning to familiar topics or ideas that align with existing cognitive strengths.",
          ],
        },
        {
          title:
            "Why is Learning Limited for Individuals with Chronic Inflammation?",
          content: [
            "For individuals with chronic inflammation, learning tends to be confined to topics or ideas that align with frameworks they are familiar with or require thought processes consistent with their cognitive strengths. This limitation hinders the ability to explore new and diverse subjects.",
          ],
        },
        {
          title:
            "How Do Challenges with Multi-Perspective Thinking Affect Learning?",
          content: [
            "Chronic challenges with multi-perspective thinking result in a decline in multi-perspective learning, causing individuals to divorce facts from perspectives and splinter, rather than integrate, their understanding of the world around them. This leads to a fragmented view of knowledge.",
          ],
        },
        {
          title:
            "How Does Spending Time Indoors Impact Exposure to Infrared Light?",
          content: [
            "Americans spend 90% of their time indoors, where artificial construction materials block health-promoting frequencies of infrared light.",
            "This indoor lifestyle robs individuals of the metabolic and detoxifying benefits of natural infrared light.",
          ],
        },
        {
          title: "Why Do Individuals Become Brilliant in Narrow Contexts?",
          content: [
            "Within this context, individuals become brilliant in narrow contexts and face challenges integrating any learning beyond those contexts. Their expertise is limited to specific areas where their cognitive strengths are aligned, making broader learning difficult.",
          ],
        },
        {
          title: "How Do Feelings of Insecurity Affect Learning?",
          content: [
            "Feelings of insecurity, commonly felt by chronically inflamed individuals, compound all of these forces by unnecessarily stressing the brain with social considerations and self-evaluation that interrupt natural cognitive processes around learning. This additional stress further impedes effective learning.",
          ],
        },
        {
          title: "Links to Relevant Information:",
          content: [],
          links: [
            "Impact of Chronic Neuroinflammation on Learning",
            "Challenges with Multi-Perspective Thinking and Learning",
            "Effects of Insecurity on Cognitive Processes",
            "Fragmented Learning and Knowledge Integration",
          ],
        },
      ],
      imgUrl: Sofa,
    },
  ]);

  const [orders, setOrders] = useState([
    "Freedom from chronic anxiety, depression, and ADHD",
    "Transformative improvements in symptoms of dyslexia, OCD, and autism.",
    "Freedom from leptin-resistance, obesity, and resulting excess cytokine production resulting from excess fat stores in the body.",
  ]);

  const [orders2, setOrders2] = useState([
    "Higher MSH levels correspond with faster recovery from stress.",
    "Free from chronic low-grade neuro-inflammation, your tolerance and ability to be present to life dramatically improve.",
    "The frequency of negative thought induced by microbial colonists is brought to manageable levels, helping individuals extricate themselves from negative thought patterns and narratives about themselves and the world that stunt personal development and emotional growth.",
  ]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (e) => {
    if (window.scrollY) {
      setBack("#FFFFFF");
    } else {
      setBack("#f3f3f3");
    }
  };

  return (
    <div className="landing-container">
      <Header back={back} />
      <div className="container">
        <div className="facebook-container">
          <div className="facebook-left-container">
            <div className="facebook-left-title">Feedback Loop</div>
            <div className="facebook-left-description">
              Toxic Enviroment + Stress Monster Natural Enviroment + Native
              Brilliance
            </div>
            <button
              onClick={() => (window.location.href = "/test")}
              className="facebook-left-button"
            >
              Get started
            </button>
          </div>
          <img src={Character}></img>
        </div>

        <div className="down-img">
          <img src={Down}></img>
        </div>

        <div className="toxic-txt">
          <span>Toxic Environment + Stress Monster Feedback Loop</span>
        </div>
        <Card
          title="Toxic Air"
          cardContent={[
            {
              title:
                "How Much Time Do Americans Spend Indoors and Why Does It Matter?",
              content: [
                "Americans spend 90% of their time in doors.",
                "Unlike outdoor air, which nature cleans through ionization, indoor air is inherently stale and requires appropriate filtration and ventilation to be healthy to breathe.",
              ],
            },
            {
              title: "What Causes Poor Indoor Air Quality?",
              content: [
                "Poor ventilation and filtration in homes, workplaces, and schools cause chemical VOCs from wall cavities and pollutants from outside (including wildfire smoke) to accumulate indoors.",
              ],
            },
            {
              title: "How Have Microbial Colonies Proliferated Indoors?",
              content: [
                "Harmful microbes, such as actinobacteria and endotoxin-producing gram-negative bacteria, have proliferated indoors in Water Damaged Buildings (WDBs) since the introduction of fungicidal paint in the 1970s, which disrupted the natural indoor micro-ecosystem.",
                "An estimated 80% of buildings in the US are colonized by these toxin-producing microbes.",
              ],
            },
            {
              title: "What Are the Health Consequences of Toxic Indoor Air?",
              content: [
                "Toxin-producing infectious diseases like COVID-19 and Lyme disease exacerbate indoor air quality issues by producing toxins that get trapped in the bodies and brains of a significant portion of the population, heightening their chronic inflammatory response.",
                "Approximately 25% of the population has vulnerable HLA immune genes that can lead to a chronic inflammatory response long after exposure to toxic indoor air or other microbial invaders like Lyme disease or COVID-19.",
              ],
            },
            {
              title: "How Does Global Air Quality Affect Human Health?",
              content: [
                "The World Health Organization released a study indicating that only 1% of the global human population consistently breathes air that is suitable for human health.",
              ],
            },
            {
              title: "Links to Relevant Information:",
              content: [],
              links: [
                "Research on Indoor Air Quality",
                "Prevalence of Harmful Microbes in Buildings",
                "Impact of Poor Ventilation and Filtration",
                "Effects of Toxin-Producing Diseases",
                "Genetic Factors and Chronic Inflammatory Responses",
                "Global Air Quality Statistics by WHO",
              ],
            },
          ]}
          iconUrl={Flat}
          imgUrl={Flower}
        />

        <Card
          title="(Infrared) Darkness"
          cardContent={[
            {
              title: "What is the Most Abundant Molecule in the Human Body?",
              content: [
                "The most abundant molecule in the human body is H2O (water).",
              ],
            },
            {
              title: "How Does Infrared Light Affect Water in Organisms?",
              content: [
                "Water in all organisms becomes increasingly structured when exposed to higher levels of infrared light.",
              ],
            },
            {
              title:
                "How Does Spending Time Indoors Impact Exposure to Infrared Light?",
              content: [
                "Americans spend 90% of their time indoors, where artificial construction materials block health-promoting frequencies of infrared light.",
                "This indoor lifestyle robs individuals of the metabolic and detoxifying benefits of natural infrared light.",
              ],
            },
            {
              title:
                "How Does Spending Time Indoors Impact Exposure to Infrared Light?",
              content: [
                "Americans spend 90% of their time indoors, where artificial construction materials block health-promoting frequencies of infrared light.",
                "This indoor lifestyle robs individuals of the metabolic and detoxifying benefits of natural infrared light.",
              ],
            },
            {
              title: "How Does Global Air Quality Affect Human Health?",
              content: [
                "The World Health Organization released a study indicating that only 1% of the global human population consistently breathes air that is suitable for human health.",
              ],
            },
            {
              title:
                "How Do Artificial Materials in Clothing Affect Infrared Light Exposure?",
              content: [],
              links: [
                "The Role of Water in the Human Body",
                "Infrared Light and Structured Water",
                "Sources of Infrared Light on Earth",
                "Impact of Indoor Lifestyles on Health",
                "Effects of Artificial Materials on Infrared Light Exposure",
              ],
            },
          ]}
          iconUrl={H2O}
          imgUrl={Woman}
        />

        <Card
          title="Toxic Food and Water"
          cardContent={[
            {
              title: "How Does the Standard American Diet (SAD) Affect Health?",
              content: [
                "The Standard American Diet (SAD) consists of the foods and water we consume the most, which are gradually making us sick and accelerating chronic inflammation and aging.",
              ],
            },
            {
              title: "What Role Do Processed Foods and Sugar Play in Health?",
              content: [
                "Processed foods and sugar are major components of the SAD. These items contribute to various health issues, including obesity, diabetes, and chronic inflammation, by providing empty calories and spiking blood sugar levels.",
              ],
            },
            {
              title: "How Do Heavy Metals in Water Affect Health?",
              content: [
                "Heavy metals in drinking water, such as lead and mercury, can cause severe health problems, including neurological damage and increased risk of chronic diseases. Long-term exposure to these contaminants exacerbates chronic inflammation and aging.",
              ],
            },
            {
              title: "How Do Herbicides and Pesticides in Food Impact Health?",
              content: [
                "Herbicides and pesticides used in agriculture can remain in the food we eat. These chemicals have been linked to various health issues, including hormone disruption, cancer, and chronic inflammation.",
              ],
            },

            {
              title: "How Do Plastics in Water and Food Affect Health?",
              content: [
                "Plastics, including microplastics, are prevalent in water and food. The ingestion of these particles can lead to toxic effects in the body, contributing to chronic inflammation and other health issues.",
              ],
            },

            {
              title: "What is BPA and How Does it Affect Health?",
              content: [
                "Bisphenol A (BPA) is a chemical used in the production of plastics. BPA can leach into food and beverages from containers made with this material, causing hormone disruption and other health problems.",
              ],
            },
            {
              title: "Links to Relevant Information:",
              content: [],
              links: [
                "Research on Integrated Relationships and Health Outcomes",
                "Impact of Authentic Connections on Well-Being",
                "Feedback Loops in Relationship Development",
                "Trust and Human Connection in Integrated Relationships",
              ],
            },
          ]}
          iconUrl={H2O}
        />

        <div className="item-wrap">
          <Swipe cards={cards} />
        </div>

        {data.map((item) => (
          <Card
            title={item.title}
            cardContent={item.content}
            iconUrl={item.iconUrl}
            imgUrl={item.imgUrl}
          />
        ))}

        <div className="natural-title">
          Natural Enviroment + Native Brilliance
        </div>

        <Card
          title="Clean Air"
          cardContent={[
            {
              title:
                "How is Clean Air Ionized by Natural Sources of Energy Outdoors?",
              content: [
                "Cosmic rays: High-energy radiation from outer space that ionizes air particles.",
                "Earth's natural radioactivity: Enhanced by deep-rooted trees in forests, which release ions into the atmosphere.",
                "Water colliding with earth/water: Events like rain, waterfalls, and waves contribute to the ionization of air.",
              ],
            },
            {
              title:
                "What Effect Does Ionized Air Have on Particles and Toxins?",
              content: [
                "Ionized air causes particles and toxins in the air to clump together, gaining enough mass to fall to the earth. This process helps to purify the air by removing harmful substances.",
              ],
            },
            {
              title:
                "How Does Ionized Air Impact Health in Natural Environments?",
              content: [
                "In natural environments with high levels of ionized air, individuals experience dramatic improvements in the functioning of their autonomic nervous systems and reductions in symptoms of chronic inflammation. This highlights the health benefits of spending time in environments with clean, ionized air.",
              ],
            },
            {
              title: "Links to Relevant Information:",
              content: [],
              links: [
                "Research on the Benefits of Clean Air",
                "Ionization by Cosmic Rays",
                "Earth's Natural Radioactivity and Ionization",
                "Water Collision and Air Ionization",
                "Health Benefits of Ionized Air",
              ],
            },
          ]}
          iconUrl={Cloud}
          imgUrl={StudentMan2}
        />

        <Card
          title="Light"
          cardContent={[
            {
              title: "How Does Infrared Light Affect Water in Our Bodies?",
              content: [
                "Infrared light ionizes water in our bodies, which has a dramatic impact on our body’s ability to store and efficiently use energy. This ionization process is crucial for maintaining optimal cellular function and energy metabolism.",
              ],
            },
            {
              title:
                "How Can Increasing Exposure to Infrared Light Reduce Inflammation?",
              content: [
                "By increasing our exposure to infrared light, particularly by spending time outside during the morning and evenings when the most infrared light reaches earth from the sun, humans can drastically reduce the levels of inflammation in their bodies. This reduction in inflammation promotes healthy metabolic processes, aiding in better sleep at night and providing the necessary energy for daily activities.",
              ],
            },
            {
              title:
                "How Does Skin Tone Influence the Impact of Infrared Light?",
              content: [
                "The more melanin an individual has in their skin (the darker their skin tone is), the more dramatic the impact increased exposure to infrared light will have on their health. Increased exposure to infrared light can significantly enhance the health benefits for individuals with darker skin tones.",
              ],
            },
            {
              title: "Links to Relevant Information:",
              content: [],
              links: [
                "Research on the Benefits of Infrared Light",
                "Infrared Light and Water Ionization",
                "Impact of Infrared Light on Inflammation",
                "Role of Melanin and Infrared Light Exposure",
              ],
            },
          ]}
          iconUrl={H2O}
          imgUrl={Sofa2}
        />

        <Card
          title="Organic Food and Clean Water"
          cardContent={[
            {
              title: "What are the Benefits of Anti-Inflammatory Foods?",
              content: [
                "Anti-inflammatory foods provide antioxidants and fiber while inhibiting inflammation in the body and enhancing one's digestive microbiome. These foods help maintain overall health and reduce the risk of chronic diseases.",
              ],
            },
            {
              title: "What Foods are Considered Anti-Inflammatory?",
              content: [
                "Fruits",
                "Vegetables",
                "Non-glutinous grains",
                "Legumes",
              ],
            },
            {
              title: "How Do Organic Meats and Fish Contribute to Health?",
              content: [
                "Organic meats and fish, when eaten infrequently, satisfy our body’s needs for the 9 essential amino acids without causing the chronic inflammation and acceleration of aging associated with the overconsumption of animal products. This balanced approach to protein intake supports healthy aging and reduces inflammation.",
              ],
            },
            {
              title: "Links to Relevant Information:",
              content: [],
              links: [
                "Research on Anti-Inflammatory Diets",
                "Benefits of Antioxidants and Fiber",
                "List of Anti-Inflammatory Foods",
                "Role of Organic Meats and Fish in Reducing Inflammation",
              ],
            },
          ]}
          iconUrl={H2O}
        />

        <div className="cards-container">
          <Swipe cards={cards2} />
        </div>

        <Card
          title="Healthy Gut and Sinuses"
          content="Outside of persistent toxin exposure, anti-inflammatory hormones like MSH and VIP return to healthy levels "
          iconUrl={Pipe}
          imgUrl={Woman}
        />

        <Card
          title="Balanced physiology & psychology"
          cardContent={[
            {
              title: "How Does a Balanced Immune System Impact Overall Health?",
              content: [
                "When your immune system returns to a balanced, stable condition, every system in your body is positively impacted. A well-regulated immune system ensures that all bodily functions operate efficiently and harmoniously.",
              ],
            },
            {
              title: "Which Systems Benefit from a Balanced Immune System?",
              content: [
                "Digestive System: Improved immune balance promotes a healthy gut microbiome, enhancing digestion and nutrient absorption.",
                "Nervous System: A stable immune system reduces inflammation in the brain and nerves, supporting cognitive function and emotional well-being.",
                "Endocrine System: Hormonal balance is maintained, regulating metabolism, growth, and mood.",
                "Respiratory System: Reduced inflammation and improved immunity support healthy lung function and protect against respiratory infections.",
                "Circulatory System: Better immune function promotes cardiovascular health by reducing inflammation and supporting healthy blood flow.",
                "Lymphatic System: Enhanced immune regulation aids in detoxification and fluid balance throughout the body.",
                "Reproductive System: Balanced immunity supports reproductive health and hormonal balance.",
                "Urinary System: A stable immune system helps prevent infections and maintains kidney and bladder health.",
              ],
            },
            {
              title:
                "How Does Meeting the Needs of Each System Affect the Brain?",
              content: [
                "Organic meats and fish, when eaten infrequently, satisfy our body’s needs for the 9 essential amino acids without causing the chronic inflammation and acceleration of aging associated with the overconsumption of animal products. This balanced approach to protein intake supports healthy aging and reduces inflammation.",
              ],
            },
            {
              title:
                "Why is the Impact on the Nervous System Especially Important?",
              content: [
                "Organic meats and fish, when eaten infrequently, satisfy our body’s needs for the 9 essential amino acids without causing the chronic inflammation and acceleration of aging associated with the overconsumption of animal products. This balanced approach to protein intake supports healthy aging and reduces inflammation.",
              ],
            },
            {
              title: "Links to Relevant Information:",
              content: [],
              links: [
                "Research on Immune System Balance",
                "Impact of Immune System on Digestive Health",
                "Immune System and Nervous System Health",
                "Hormonal Balance and Endocrine Health",
                "espiratory System and Immune Function",
                "Cardiovascular Health and Immune System",
                "Lymphatic System and Immunity",
                "Reproductive Health and Immune Balance",
                "Urinary System Health and Immune Function",
              ],
            },
          ]}
          iconUrl={Pipe}
          imgUrl=""
        />

        <div className="font-600 psychology-content">
          When your immune system returns to a balanced, stable condition, every
          system is impacted for the better
        </div>

        <div className="goods-container">
          {items.map((item) => (
            <Item imgUrl={item.imgUrl} content={item.content} />
          ))}
        </div>

        <div className="font-600 brain-content">
          When the needs of each system are met, the brain is freed from a
          chronically activated state, which looks like…
        </div>

        {orders.map((item, index) => (
          <Order idx={index} content={item} />
        ))}

        <div className="font-600 psychology-content">
          <div>
            The impact on the nervous system is especially important to
            transformations in human psychology.
          </div>
        </div>

        {orders2.map((item, index) => (
          <Order idx={index} content={item} />
        ))}

        <Card
          title="Integrated Relationships"
          cardContent={[
            {
              title: "How Does Feeling Connected Affect Health and Well-Being?",
              content: [
                "Feeling connected to yourself and the people in your life is the basis of feeling safe, happy, and protected and is correlated with positive health outcomes. Authentic connections contribute to overall well-being and longevity.",
              ],
            },
            {
              title:
                "How Do Integrated Relationships Contribute to Happiness and Longevity?",
              content: [
                "Far from a state of desperation, individuals who have developed integrated relationships based on authentic connection live the longest, happiest lives. These relationships create a supportive environment that fosters emotional and physical health.",
              ],
            },
            {
              title:
                "What is a Synergistic Feedback Loop in Integrated Relationships?",
              content: [
                "The more we are able to meet our needs, the more selfless we can be.",
                "This selflessness helps us cultivate authentic, integrated relationships with one another.",
                "As we develop these relationships, we become better able to meet our needs collectively and collaboratively.",
              ],
            },
            {
              title:
                "How Does This Feedback Loop Affect Trust and Focus on Human Connection?",
              content: [
                "Over time, people who have experienced this positive feedback loop learn to trust that their needs will be met. This trust frees them up to focus on human connection and the inevitable learning experiences that such authentic connections bring.",
              ],
            },
            {
              title: "Links to Relevant Information:",
              content: [],
              links: [
                "Research on Integrated Relationships and Health Outcomes",
                "Impact of Authentic Connections on Well-Being",
                "Feedback Loops in Relationship Development",
                "Trust and Human Connection in Integrated Relationships",
              ],
            },
          ]}
          iconUrl={H2O}
        />

        <Card
          title="Integrated Learning: Cultivating Your Native Brilliance"
          cardContent={[
            {
              title:
                "How Does Embracing Native Brilliance Impact Personal Perspective?",
              content: [
                "When people stop sacrificing their Native Brilliance due to societal expectations that ignore basic human needs, they cease to scapegoat others for preventing them from leading the lives they want to lead. They understand their specific human needs and scientifically proven impediments to meeting those needs, recognizing the human brain’s tendency to blame the outside world for symptoms of neurological stress. In short, they use any trace of negative thoughts as a sign that they’re unwell or aren’t getting their needs met.",
              ],
            },
            {
              title:
                "How Does Freedom from a Confining Worldview Enhance Cognitive Flexibility?",
              content: [
                "Freedom from a worldview confined by the tendency to scapegoat what we can see allows individuals to redirect the enormous amount of brain power devoted to distracting mental chatter. This shift enables them to tolerate the temporary stress of entertaining perspectives that conflict with their own.",
              ],
            },
            {
              title:
                "How Does Empowerment to Meet Needs Influence Interpersonal Awareness?",
              content: [
                "Empowered to meet their own needs, those committed to cultivating their Native Brilliance become increasingly aware that people in their lives who aren’t willing to consider their needs are likely struggling to meet their own basic human needs.",
              ],
            },
            {
              title:
                "What Role Does Awareness of Stress Monster Feedback Loops Play?",
              content: [
                "Individuals committed to GOING NATIVE become increasingly aware of the extent to which human behavior is dictated by various Stress Monster Feedback loops. They don’t take it personally when others feel threatened, critical, or defensive in their presence. Instead, they use others’ negative behaviors and attitudes to identify toxic environments to avoid.",
              ],
            },
            {
              title:
                "How Do Integrated Learners Manage Others' Perspectives and Stress?",
              content: [
                "They learn not to take others’ perspectives at face value when they know those perspectives are confined by chronic neurological stress. All these factors contribute to neurological freedom from reactivity to environmental stressors and from the limiting beliefs and behaviors of others reacting to chronic neurological stress themselves.",
              ],
            },
            {
              title:
                "What are the Cognitive Benefits of This Neurological Freedom?",
              content: [
                "This freedom from anxious, distracted, and depressed mental chatter and the social constraints caused by these neurological realities on a societal level ruptures the constricted relationship between the right and left hemispheres of the brain. Rather than the left hemisphere filtering perceptual data from the right hemisphere due to biases an individual clings to because of feelings of insecurity in a neuro-inflamed state, individuals can suspend their perspectives to entertain new ideas and experiences.",
              ],
            },
            {
              title: "Links to Relevant Information:",
              content: [],
              links: [
                "Research on Native Brilliance and Cognitive Flexibility",
                "Impact of Understanding Human Needs on Stress Management",
                "Stress Monster Feedback Loops and Behavioral Awareness",
                "Neurological Freedom and Cognitive Integration",
              ],
            },
          ]}
          iconUrl={H2O}
        />
      </div>
      <ScrollToTop smooth />
    </div>
  );
}
