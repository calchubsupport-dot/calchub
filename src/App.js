import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <nav className="navbar">
        <h2>CalcHub</h2>
      </nav>

      <div className="hero">
        <h1>Free Online Calculators - GST, EMI, Profit & More</h1>
        <p>Use our free tools to calculate GST, EMI, profit, discounts and more instantly.</p>
        <p>Click a calculator to start</p>
      </div>

      <div className="grid">
        <div className="card" onClick={() => navigate("/profit")}>💰<h3>Profit & Loss</h3></div>
        <div className="card" onClick={() => navigate("/gst")}>🧾<h3>GST Calculator</h3></div>
        <div className="card" onClick={() => navigate("/discount")}>🏷️<h3>Discount</h3></div>
        <div className="card" onClick={() => navigate("/emi")}>🏦<h3>EMI</h3></div>
        <div className="card" onClick={() => navigate("/time")}>⏱️<h3>Time</h3></div>
        <div className="card" onClick={() => navigate("/youtube")}>📺<h3>YouTube Earnings</h3></div>
      </div>

      <footer className="footer">
        <p>© 2026 CalcHub</p>
        <div>
          <span onClick={() => navigate("/about")}>About</span> |{" "}
          <span onClick={() => navigate("/contact")}>Contact</span> |{" "}
          <span onClick={() => navigate("/privacy-policy")}>Privacy Policy</span> |{" "}
          <span onClick={() => navigate("/terms")}>Terms</span>
        </div>
      </footer>
    </div>
  );
}

/* PAGE */
function Page({ title }) {
  return (
    <div style={{ padding: "40px", maxWidth: "800px", margin: "auto" }}>
      <h1>{title}</h1>

      {title === "Terms and Conditions" ? (
        <>
          <p>Welcome to CalcHub!</p>

          <h3>Use of the Website</h3>
          <p>This website provides free calculators for informational purposes only.</p>

          <h3>No Professional Advice</h3>
          <p>Results should not be considered financial or legal advice.</p>

          <h3>User Responsibility</h3>
          <p>You agree to use this website only for lawful purposes.</p>

          <h3>Third-Party Services</h3>
          <p>We may display ads like Google AdSense.</p>

          <h3>Limitation of Liability</h3>
          <p>We are not responsible for any losses from using this website.</p>
        </>
      ) : (
        <p>
          Use our {title.toLowerCase()} to quickly and easily perform calculations online for free.
        </p>
      )}
    </div>
  );
}

function EMI() {
  const [amount, setAmount] = React.useState("");
  const [rate, setRate] = React.useState("");
  const [time, setTime] = React.useState("");
  const [emi, setEmi] = React.useState(null);

  const calculateEMI = () => {
    const P = parseFloat(amount);
    const R = parseFloat(rate) / 12 / 100;
    const N = parseFloat(time) * 12;

    if (!P || !R || !N) {
      alert("Please fill all fields");
      return;
    }

    const result =
      (P * R * Math.pow(1 + R, N)) /
      (Math.pow(1 + R, N) - 1);

    setEmi(result.toFixed(2));
  };

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>🏦 EMI Calculator</h1>

      <input placeholder="Loan Amount" value={amount} onChange={(e) => setAmount(e.target.value)} /><br /><br />
      <input placeholder="Interest Rate (%)" value={rate} onChange={(e) => setRate(e.target.value)} /><br /><br />
      <input placeholder="Time (Years)" value={time} onChange={(e) => setTime(e.target.value)} /><br /><br />

      <button onClick={calculateEMI}>Calculate</button>

      {emi && <h2>EMI: ₹ {emi} / month</h2>}
    </div>
  );
}

function GST() {
  const [amount, setAmount] = React.useState("");
  const [gst, setGst] = React.useState("");
  const [result, setResult] = React.useState(null);

  const calculateGST = () => {
    const price = parseFloat(amount);
    const rate = parseFloat(gst);

    if (!price || !rate) {
      alert("Enter valid values");
      return;
    }

    const gstAmount = (price * rate) / 100;
    const total = price + gstAmount;

    setResult({
      gstAmount: gstAmount.toFixed(2),
      total: total.toFixed(2),
    });
  };

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>🧾 GST Calculator</h1>

      <input placeholder="Original Amount" value={amount} onChange={(e)=>setAmount(e.target.value)} /><br /><br />
      <input placeholder="GST %" value={gst} onChange={(e)=>setGst(e.target.value)} /><br /><br />

      <button onClick={calculateGST}>Calculate</button>

      {result && (
        <div>
          <h3>GST: ₹ {result.gstAmount}</h3>
          <h2>Total: ₹ {result.total}</h2>
        </div>
      )}
    </div>
  );
}

function ProfitLossCalc() {
  const [cost, setCost] = React.useState("");
  const [sell, setSell] = React.useState("");
  const [result, setResult] = React.useState("");

  const calculate = () => {
    const c = parseFloat(cost);
    const s = parseFloat(sell);

    if (!c || !s) {
      alert("Enter valid values");
      return;
    }

    const diff = s - c;
    const percent = ((diff / c) * 100).toFixed(2);

    if (diff > 0) {
      setResult(`Profit: ₹${diff} (${percent}%)`);
    } else if (diff < 0) {
      setResult(`Loss: ₹${Math.abs(diff)} (${percent}%)`);
    } else {
      setResult("No Profit No Loss");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>💰 Profit & Loss Calculator</h1>

      <input placeholder="Cost Price" value={cost} onChange={(e)=>setCost(e.target.value)} /><br /><br />
      <input placeholder="Selling Price" value={sell} onChange={(e)=>setSell(e.target.value)} /><br /><br />

      <button onClick={calculate}>Calculate</button>

      <h2>{result}</h2>
    </div>
  );
}

function DiscountCalc() {
  const [price, setPrice] = React.useState("");
  const [discount, setDiscount] = React.useState("");
  const [result, setResult] = React.useState("");

  const calculate = () => {
    const p = parseFloat(price);
    const d = parseFloat(discount);

    if (!p || !d) {
      alert("Enter valid values");
      return;
    }

    const saved = (p * d) / 100;
    const final = p - saved;

    setResult(`Final Price: ₹${final} | You Save: ₹${saved}`);
  };

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>🏷️ Discount Calculator</h1>

      <input placeholder="Original Price" value={price} onChange={(e)=>setPrice(e.target.value)} /><br /><br />
      <input placeholder="Discount %" value={discount} onChange={(e)=>setDiscount(e.target.value)} /><br /><br />

      <button onClick={calculate}>Calculate</button>

      <h2>{result}</h2>
    </div>
  );
}

function TimeCalc() {
  const [start, setStart] = React.useState("");
  const [end, setEnd] = React.useState("");
  const [result, setResult] = React.useState("");

  const calculate = () => {
    if (!start || !end) {
      alert("Select both times");
      return;
    }

    const startTime = new Date(`2024-01-01T${start}`);
    const endTime = new Date(`2024-01-01T${end}`);

    let diff = (endTime - startTime) / (1000 * 60 * 60);
    if (diff < 0) diff += 24;

    setResult(`Difference: ${diff} hours`);
  };

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>⏱️ Time Calculator</h1>

      <input type="time" value={start} onChange={(e)=>setStart(e.target.value)} /><br /><br />
      <input type="time" value={end} onChange={(e)=>setEnd(e.target.value)} /><br /><br />

      <button onClick={calculate}>Calculate</button>

      <h2>{result}</h2>
    </div>
  );
}

function YouTubeCalc() {
  const [views, setViews] = React.useState("");
  const [cpm, setCpm] = React.useState("");
  const [result, setResult] = React.useState("");

  const calculate = () => {
    const v = parseFloat(views);
    const r = parseFloat(cpm);

    if (!v || !r) {
      alert("Enter valid values");
      return;
    }

    setResult(((v / 1000) * r).toFixed(2));
  };

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>📺 YouTube Earnings</h1>

      <input placeholder="Views" value={views} onChange={(e)=>setViews(e.target.value)} /><br /><br />
      <input placeholder="CPM" value={cpm} onChange={(e)=>setCpm(e.target.value)} /><br /><br />

      <button onClick={calculate}>Calculate</button>

      <h2>{result && `$${result}`}</h2>
    </div>
  );
}

/* OTHER CALCULATORS SAME AS YOUR CODE (NO CHANGE) */

function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>CalcHub is an all-in-one calculator platform designed to make daily calculations simple and fast.</p>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>Email: calchub.support@gmail.com</p>
    </div>
  );
}

function PrivacyPolicy() {
  return (
    <div>
      <h1>Privacy Policy</h1>
      <p>We respect your privacy and do not collect personal data without consent.</p>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/terms" element={<Page title="Terms and Conditions" />} />
        <Route path="/" element={<Home />} />
        <Route path="/profit" element={<ProfitLossCalc />} />
        <Route path="/gst" element={<GST />} />
        <Route path="/discount" element={<DiscountCalc />} />
        <Route path="/emi" element={<EMI />} />
        <Route path="/time" element={<TimeCalc />} />
        <Route path="/youtube" element={<YouTubeCalc />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}