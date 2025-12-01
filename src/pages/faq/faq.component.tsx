import { useState } from "react";
import { Input } from "antd";
import { SearchIcon } from "../../assets/images/icons/search-normal";
import useLocalization from "../../assets/lang";
import { useFaqStyles } from "./faq.style";
import {IFAQData} from "./faq";

const topics = [
    "How are IT leaders changing their cloud strategies in times of uncertainty?",
    "To help the C-suite",
    "We’re kicking off this live blog to share",
    "Business decision-makers keep"
];

const faqData: IFAQData = {
    "How are IT leaders changing their cloud strategies in times of uncertainty?": [
        {
            question: "What are the biggest barriers to achieving true corporate sustainability?",
            answer: "Barriers include lack of resources, leadership support, and outdated systems.",
        },
        {
            question: "How are IT leaders reacting to market volatility?",
            answer: "They are optimizing workloads and leveraging multi-cloud architectures.",
        },
    ],
    "To help the C-suite": [
        {
            question: "What tools are most useful for C-suite leaders?",
            answer: "Dashboards, AI reports, and strategic KPIs are most common.",
        },
    ],
    "We’re kicking off this live blog to share": [
        {
            question: "What is the goal of this blog?",
            answer: "To share industry insights and real-time updates.",
        },
    ],
    "Business decision-makers keep": [
        {
            question: "How do decision-makers use data?",
            answer: "They use data to reduce risks and identify growth opportunities.",
        },
    ],
};


const FaqComponent = () => {
    const classes = useFaqStyles();
    const translate = useLocalization();

    const [selectedTopic, setSelectedTopic] = useState(topics[0]);
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleTopicClick = (topic: string) => {
        setSelectedTopic(topic);
        setOpenIndex(null);
    };

    const toggleAnswer = (index: number) => {
        setOpenIndex(prev => (prev === index ? null : index));
    };

    return (
        <div className={classes.container}>
            <div className={classes.faqAndSearch}>
                <h1>FAQ</h1>
                <div className={classes.faqContainer}>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}><SearchIcon /></div>
                        <Input
                            className={classes.searchInput}
                            placeholder={translate("news_search_placeholder")}
                            bordered={false}
                        />
                    </div>
                </div>
            </div>

            <div className={classes.contentsAndQuestions}>
                <div className={classes.contents}>
                    <h2>{translate("topics")}</h2>
                    {topics.map((topic, index) => (
                        <h4
                            key={index}
                            onClick={() => handleTopicClick(topic)}
                            style={{
                                color: topic === selectedTopic ? "#2BAAE2" : "#000",
                                cursor: "pointer"
                            }}
                        >
                            {topic}
                        </h4>
                    ))}
                </div>

                <div className={classes.lineHorizantal}></div>

                <div className={classes.questionsContainer}>
                    {faqData[selectedTopic]?.map((item, index) => (
                        <div
                            key={index}
                            className={openIndex === index ? classes.answerDiv : classes.questionDiv}
                        >
                            <div style={{ flex: 1 }}>
                                <h3 className={classes.questionParag}>{item.question}</h3>
                                {openIndex === index && (
                                    <p className={classes.answerText}>{item.answer}</p>
                                )}
                            </div>
                            <div onClick={() => toggleAnswer(index)} className={classes.plusDiv}>
                                <h1>{openIndex === index ? "-" : "+"}</h1>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FaqComponent;
