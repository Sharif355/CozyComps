import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

const DonationModal = ({ show, handleClose, campaignId, updateCampaign }) => {
  const [donationAmount, setDonationAmount] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  const handleDonationSubmit = (e) => {
    e.preventDefault();
  };

  if (!stripe || !elements) {
    return;
  }

  const { data } = fetch("http://localhost:3001/create-payment-intent", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      amount: parseFloat(donationAmount) * 100,
      currency: "usd",
      campaignId,
    }),
  }).then((res) => res.json());

  const { clientSecret } = data;

  const result = stripe.confirmCardPayment(clientSecret, {
    payment_method: {
      card: elements.getElement(CardElement),
    },
  });

  if (result.error) {
    console.log(result.error.message);
  } else {
    updateCampaign();
    handleClose();
  }

  return (
    <div>
      <div
        style={{
          display: show ? "block" : "none",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "#fff",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <h2>Donate Now</h2>
          <form onSubmit={handleDonationSubmit}>
            <label>
              Donation Amount:
              <input
                type="number"
                value={donationAmount}
                onChange={(e) => setDonationAmount(e.target.value)}
              />
            </label>
            <br />
            <label>
              Credit Card Information:
              <CardElement
                options={{
                  style: {
                    base: {
                      fontSize: "16px",
                      color: "#424770",
                      "::placeholder": {
                        color: "#aab7c4",
                      },
                    },
                    invalid: {
                      color: "#9e2146",
                    },
                  },
                }}
              />
            </label>
            <br />
            <button type="submit">Submit Donation</button>
          </form>
          <button onClick={handleClose} style={{ marginTop: "10px" }}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonationModal;
