import { useState } from "react";

function FaqSection({ faqData, theme }) {
  const [showAns, setShowAns] = useState(null);
  const [showMultiAns, setShowMultiAns] = useState(false);
  const [multiAns, setMultiAns] = useState([]);

  function singleAnswerFun(dataItemId) {
    if (showAns === dataItemId) {
      setShowAns(null);
    } else {
      setShowAns(dataItemId);
    }
  }

  function multiAnsFun(dataItemId) {
    const cpymultiAns = [...multiAns];

    const indexSelected =
      cpymultiAns.indexOf(dataItemId);

    if (indexSelected === -1) {
      cpymultiAns.push(dataItemId);
    } else {
      cpymultiAns.splice(indexSelected, 1);
    }

    setMultiAns(cpymultiAns);
  }

  return (
    <section
      id="faq"
      className="py-16 px-6"
    >
      <div
        className="
          max-w-4xl
          mx-auto
        "
      >
        <h2
          className="
            text-4xl
            font-bold
            text-center
            mb-4
          "
          style={{
            color: theme.primary,
          }}
        >
          Frequently Asked Questions
        </h2>

        <p
          className="
            text-center
            mb-8
          "
          style={{
            color: theme.secondary,
          }}
        >
          Everything you'd like to know about our
          berry sweet bakery.
        </p>

        <div className="flex justify-center mb-10">
          <button
            onClick={() =>
              setShowMultiAns(!showMultiAns)
            }
            className="
              px-6
              py-3
              rounded-full
              text-white
              font-semibold
              transition-all
              hover:scale-105
            "
            style={{
              backgroundColor: theme.primary,
            }}
          >
            {showMultiAns
              ? "Multiple Selection ON"
              : "Multiple Selection OFF"}
          </button>
        </div>

        {faqData.map((dataItem) => (
          <div
            key={dataItem.id}
            className="
              mb-4
              rounded-2xl
              overflow-hidden
              shadow-md
            "
            style={{
              border: `2px solid ${theme.secondary}`,
              backgroundColor: theme.accent,
            }}
          >
            <div
              className="
                flex
                justify-between
                items-center
                p-5
              "
            >
              <h3
                className="
                  font-semibold
                  text-lg
                "
                style={{
                  color: theme.primary,
                }}
              >
                {dataItem.question}
              </h3>

              <button
                className="
                  text-2xl
                  font-bold
                  cursor-pointer
                  px-3
                "
                style={{
                  color: theme.primary,
                }}
                onClick={
                  showMultiAns
                    ? () =>
                        multiAnsFun(dataItem.id)
                    : () =>
                        singleAnswerFun(
                          dataItem.id
                        )
                }
              >
                {showMultiAns
                  ? multiAns.includes(
                      dataItem.id
                    )
                    ? "−"
                    : "+"
                  : showAns === dataItem.id
                  ? "−"
                  : "+"}
              </button>
            </div>

            {showMultiAns
              ? multiAns.includes(
                  dataItem.id
                ) && (
                  <div
                    className="
                      px-5
                      pb-5
                      text-gray-700
                      leading-relaxed
                    "
                  >
                    {dataItem.answer}
                  </div>
                )
              : showAns === dataItem.id && (
                  <div
                    className="
                      px-5
                      pb-5
                      text-gray-700
                      leading-relaxed
                    "
                  >
                    {dataItem.answer}
                  </div>
                )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FaqSection;