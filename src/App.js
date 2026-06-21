import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <nav className="navbar">
  <h2 className="logo">CalcHub</h2>

  <div className="nav-links">
    <a href="/">Home</a>
    <a href="/gst-guide">GST Guide</a>
    <a href="/youtube-earnings-guide">YouTube Guide</a>
  </div>
</nav>

<div className="hero">
  <h1>All-in-One Free Calculator Hub</h1>
  <p>GST, EMI, Profit, Discount & More — Fast, Accurate & Free</p>

  <button 
    className="cta-btn" 
    onClick={() => document.getElementById("tools").scrollIntoView({ behavior: "smooth" })}
  >
    Start Calculating
  </button>
</div>
    

<div className="content">
  <h2 className="section-title">Why Choose CalcHub?</h2>
  <div className="card-grid">
    
    <div className="info-card">
      <h3>⚡ Fast & Instant</h3>
      <p>Get accurate results instantly without any delay or loading time.</p>
    </div>

    <div className="info-card">
      <h3>🎯 Easy to Use</h3>
      <p>Simple interface designed for students, professionals, and everyone.</p>
    </div>

    <div className="info-card">
      <h3>💯 Accurate Results</h3>
      <p>All calculators use standard formulas to ensure precise calculations.</p>
    </div>

    <div className="info-card">
      <h3>🆓 Completely Free</h3>
      <p>No sign-up, no hidden charges. Use all tools for free anytime.</p>
    </div>

    <div className="info-card">
      <h3>📊 Multiple Tools</h3>
      <p>GST, EMI, Profit, Discount, Time & YouTube earnings in one place.</p>
    </div>

    <div className="info-card">
      <h3>🔒 Safe & Secure</h3>
      <p>Your data stays private. No data is stored or shared.</p>
    </div>

  </div>
</div>

<div className="content">
  <h2 className="section-title">Why People Trust CalcHub</h2>
  <div className="card-grid">

    <div className="info-card">
      <h3>🌍 Used Worldwide</h3>
      <p>Accessible from anywhere, anytime on any device.</p>
    </div>

    <div className="info-card">
      <h3>⚡ No Login Needed</h3>
      <p>Start using instantly without creating an account.</p>
    </div>

    <div className="info-card">
      <h3>📱 Mobile Friendly</h3>
      <p>Fully responsive design for phones, tablets, and desktops.</p>
    </div>
  </div>
</div>

       <div className="content">
        <h1>Free Online Calculators - GST, EMI, Profit & More</h1>
        <p>Use our free tools to calculate GST, EMI, profit, discounts and more instantly.</p>
        <p>Click a calculator to start</p>
      </div>

      <div id="tools" className="card-grid">

  <div className="card" onClick={() => navigate("/profit")}>
    <span>💰</span>
    <h3>Profit & Loss</h3>
  </div>

  <div className="card" onClick={() => navigate("/gst")}>
    <span>🧾</span>
    <h3>GST Calculator</h3>
  </div>

  <div className="card" onClick={() => navigate("/discount")}>
    <span>🏷️</span>
    <h3>Discount</h3>
  </div>

  <div className="card" onClick={() => navigate("/emi")}>
    <span>🏦</span>
    <h3>EMI</h3>
  </div>

  <div className="card" onClick={() => navigate("/time")}>
    <span>⏱️</span>
    <h3>Time</h3>
  </div>

  <div className="card" onClick={() => navigate("/youtube")}>
    <span>📺</span>
    <h3>YouTube Earnings</h3>
  </div>

</div>

    <div className="content">
  <h2>What is CalcHub?</h2>
  <p>
    CalcHub is a free online calculator platform that helps users perform
    financial and daily calculations easily. From GST and EMI calculations
    to profit and discount tools, everything is available in one place.
  </p>

  <h2>How It Works</h2>
  <p>
    Simply select a calculator, enter your values, and get instant results.
    All tools are designed for accuracy and ease of use.
  </p>
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

  const [emiHistory, setEmiHistory] = React.useState([]);

  // LOAD HISTORY
  React.useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("emiHistory")) || [];
    setEmiHistory(saved);
  }, []);

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

    const finalEmi = result.toFixed(2);
    setEmi(finalEmi);

    const newEntry = {
      amount,
      rate,
      time,
      emi: finalEmi
    };

    const updatedHistory = [newEntry, ...emiHistory];
    setEmiHistory(updatedHistory);
    localStorage.setItem("emiHistory", JSON.stringify(updatedHistory));
  };

  // 🗑️ DELETE SINGLE ITEM
  const deleteItem = (index) => {
    const updated = emiHistory.filter((_, i) => i !== index);
    setEmiHistory(updated);
    localStorage.setItem("emiHistory", JSON.stringify(updated));
  };

  // ❌ CLEAR ALL
  const clearAll = () => {
    setEmiHistory([]);
    localStorage.removeItem("emiHistory");
  };

  return (
    <div className="calc-container">
      <h1>🏦 EMI Calculator</h1>

      <input
        placeholder="Loan Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      /><br /><br />

      <input
        placeholder="Interest Rate (%)"
        value={rate}
        onChange={(e) => setRate(e.target.value)}
      /><br /><br />

      <input
        placeholder="Time (Years)"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      /><br /><br />

      <button onClick={calculateEMI}>Calculate</button>

      {emi && <h2>EMI: ₹ {emi} / month</h2>}

      {/* HISTORY */}
      {emiHistory.length > 0 && (
        <div>
          <h3>📜 History</h3>

          <button onClick={clearAll}>❌ Clear All</button>

          {emiHistory.map((item, index) => (
            <div key={index}>
              ₹{item.amount} | {item.rate}% | {item.time} yrs → EMI ₹{item.emi}
              <button onClick={() => deleteItem(index)}>🗑️</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function GST() {
  const [amount, setAmount] = React.useState("");
  const [gst, setGst] = React.useState("");
  const [result, setResult] = React.useState(null);

  const [history, setHistory] = React.useState([]);

  // LOAD HISTORY
  React.useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("gstHistory")) || [];
    setHistory(saved);
  }, []);

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

    const newEntry = `₹${price} + ${rate}% = ₹${total.toFixed(2)}`;
    const updatedHistory = [newEntry, ...history];

    setHistory(updatedHistory);
    localStorage.setItem("gstHistory", JSON.stringify(updatedHistory));
  };

  // 🗑️ DELETE ONE
  const deleteItem = (index) => {
    const updated = history.filter((_, i) => i !== index);
    setHistory(updated);
    localStorage.setItem("gstHistory", JSON.stringify(updated));
  };

  // ❌ CLEAR ALL
  const clearAll = () => {
    setHistory([]);
    localStorage.removeItem("gstHistory");
  };

  return (
    <div className="calc-container">
      <h1>🧾 GST Calculator</h1>

      <input
        placeholder="Original Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      /><br /><br />

      <input
        placeholder="GST %"
        value={gst}
        onChange={(e) => setGst(e.target.value)}
      /><br /><br />

      <button onClick={calculateGST}>Calculate</button>

      {result && (
        <div>
          <h3>GST: ₹ {result.gstAmount}</h3>
          <h2>Total: ₹ {result.total}</h2>
        </div>
      )}

      {/* HISTORY */}
      {history.length > 0 && (
        <div>
          <h3>📜 History</h3>

          <button onClick={clearAll}>❌ Clear All</button>

          <ul>
            {history.map((item, index) => (
              <li key={index}>
                {item}
                <button onClick={() => deleteItem(index)}>🗑️</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function ProfitLossCalc() {
  const [cost, setCost] = React.useState("");
  const [sell, setSell] = React.useState("");
  const [result, setResult] = React.useState("");

  const [plHistory, setPlHistory] = React.useState([]);

  // LOAD HISTORY
  React.useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("plHistory")) || [];
    setPlHistory(saved);
  }, []);

  const calculate = () => {
    const c = parseFloat(cost);
    const s = parseFloat(sell);

    if (!c || !s) {
      alert("Enter valid values");
      return;
    }

    const diff = s - c;
    const percent = ((diff / c) * 100).toFixed(2);

    let finalResult = "";

    if (diff > 0) {
      finalResult = `Profit: ₹${diff} (${percent}%)`;
    } else if (diff < 0) {
      finalResult = `Loss: ₹${Math.abs(diff)} (${percent}%)`;
    } else {
      finalResult = "No Profit No Loss";
    }

    setResult(finalResult);

    const newEntry = {
      cost,
      sell,
      result: finalResult
    };

    const updatedHistory = [newEntry, ...plHistory];
    setPlHistory(updatedHistory);
    localStorage.setItem("plHistory", JSON.stringify(updatedHistory));
  };

  // 🗑️ DELETE ONE
  const deleteItem = (index) => {
    const updated = plHistory.filter((_, i) => i !== index);
    setPlHistory(updated);
    localStorage.setItem("plHistory", JSON.stringify(updated));
  };

  // ❌ CLEAR ALL
  const clearAll = () => {
    setPlHistory([]);
    localStorage.removeItem("plHistory");
  };

  return (
    <div className="calc-container">
      <h1>💰 Profit & Loss Calculator</h1>

      <input
        placeholder="Cost Price"
        value={cost}
        onChange={(e) => setCost(e.target.value)}
      /><br /><br />

      <input
        placeholder="Selling Price"
        value={sell}
        onChange={(e) => setSell(e.target.value)}
      /><br /><br />

      <button onClick={calculate}>Calculate</button>

      <h2>{result}</h2>

      {/* HISTORY */}
      {plHistory.length > 0 && (
        <div>
          <h3>📜 History</h3>

          <button onClick={clearAll}>❌ Clear All</button>

          {plHistory.map((item, index) => (
            <div key={index}>
              ₹{item.cost} → ₹{item.sell} = {item.result}
              <button onClick={() => deleteItem(index)}>🗑️</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function DiscountCalc() {
  const [price, setPrice] = React.useState("");
  const [discount, setDiscount] = React.useState("");
  const [result, setResult] = React.useState("");

  const [discountHistory, setDiscountHistory] = React.useState([]);

  // LOAD HISTORY
  React.useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("discountHistory")) || [];
    setDiscountHistory(saved);
  }, []);

  const calculate = () => {
    const p = parseFloat(price);
    const d = parseFloat(discount);

    if (!p || !d) {
      alert("Enter valid values");
      return;
    }

    const savedAmount = (p * d) / 100;
    const final = p - savedAmount;

    const finalResult = `Final Price: ₹${final.toFixed(2)} | You Save: ₹${savedAmount.toFixed(2)}`;
    setResult(finalResult);

    const newEntry = {
      price,
      discount,
      result: finalResult
    };

    const updatedHistory = [newEntry, ...discountHistory];
    setDiscountHistory(updatedHistory);
    localStorage.setItem("discountHistory", JSON.stringify(updatedHistory));
  };

  // 🗑️ DELETE ONE
  const deleteItem = (index) => {
    const updated = discountHistory.filter((_, i) => i !== index);
    setDiscountHistory(updated);
    localStorage.setItem("discountHistory", JSON.stringify(updated));
  };

  // ❌ CLEAR ALL
  const clearAll = () => {
    setDiscountHistory([]);
    localStorage.removeItem("discountHistory");
  };

  return (
    <div className="calc-container">
      <h1>🏷️ Discount Calculator</h1>

      <input
        placeholder="Original Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      /><br /><br />

      <input
        placeholder="Discount %"
        value={discount}
        onChange={(e) => setDiscount(e.target.value)}
      /><br /><br />

      <button onClick={calculate}>Calculate</button>

      <h2>{result}</h2>

      {/* HISTORY */}
      {discountHistory.length > 0 && (
        <div>
          <h3>📜 History</h3>

          <button onClick={clearAll}>❌ Clear All</button>

          {discountHistory.map((item, index) => (
            <div key={index}>
              ₹{item.price} | {item.discount}% → {item.result}
              <button onClick={() => deleteItem(index)}>🗑️</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function TimeCalc() {
  const [start, setStart] = React.useState("");
  const [end, setEnd] = React.useState("");
  const [result, setResult] = React.useState("");

  const [timeHistory, setTimeHistory] = React.useState([]);

  // LOAD HISTORY
  React.useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("timeHistory")) || [];
    setTimeHistory(saved);
  }, []);

  const calculate = () => {
    if (!start || !end) {
      alert("Select both times");
      return;
    }

    const startTime = new Date(`2024-01-01T${start}`);
    const endTime = new Date(`2024-01-01T${end}`);

    let diff = (endTime - startTime) / (1000 * 60 * 60);
    if (diff < 0) diff += 24;

    // 🔥 Better format (hours + minutes)
    const hours = Math.floor(diff);
    const minutes = Math.round((diff - hours) * 60);

    const finalResult = `Difference: ${hours}h ${minutes}m`;
    setResult(finalResult);

    const newEntry = {
      start,
      end,
      result: finalResult
    };

    const updatedHistory = [newEntry, ...timeHistory];
    setTimeHistory(updatedHistory);
    localStorage.setItem("timeHistory", JSON.stringify(updatedHistory));
  };

  // 🗑️ DELETE ONE
  const deleteItem = (index) => {
    const updated = timeHistory.filter((_, i) => i !== index);
    setTimeHistory(updated);
    localStorage.setItem("timeHistory", JSON.stringify(updated));
  };

  // ❌ CLEAR ALL
  const clearAll = () => {
    setTimeHistory([]);
    localStorage.removeItem("timeHistory");
  };

  return (
    <div className="calc-container">
      <h1>⏱️ Time Calculator</h1>

      <input
        type="time"
        value={start}
        onChange={(e) => setStart(e.target.value)}
      /><br /><br />

      <input
        type="time"
        value={end}
        onChange={(e) => setEnd(e.target.value)}
      /><br /><br />

      <button onClick={calculate}>Calculate</button>

      <h2>{result}</h2>

      {/* HISTORY */}
      {timeHistory.length > 0 && (
        <div>
          <h3>📜 History</h3>

          <button onClick={clearAll}>❌ Clear All</button>

          {timeHistory.map((item, index) => (
            <div key={index}>
              {item.start} → {item.end} = {item.result}
              <button onClick={() => deleteItem(index)}>🗑️</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function YouTubeCalc() {
  const [views, setViews] = React.useState("");
  const [cpm, setCpm] = React.useState("");
  const [result, setResult] = React.useState("");

  const [ytHistory, setYtHistory] = React.useState([]);

  // LOAD HISTORY
  React.useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("ytHistory")) || [];
    setYtHistory(saved);
  }, []);

  const calculate = () => {
    const v = parseFloat(views);
    const r = parseFloat(cpm);

    if (!v || !r) {
      alert("Enter valid values");
      return;
    }

    const earnings = ((v / 1000) * r).toFixed(2);
    setResult(earnings);

    const newEntry = {
      views,
      cpm,
      result: `$${earnings}`
    };

    const updatedHistory = [newEntry, ...ytHistory];
    setYtHistory(updatedHistory);
    localStorage.setItem("ytHistory", JSON.stringify(updatedHistory));
  };

  // 🗑️ DELETE ONE
  const deleteItem = (index) => {
    const updated = ytHistory.filter((_, i) => i !== index);
    setYtHistory(updated);
    localStorage.setItem("ytHistory", JSON.stringify(updated));
  };

  // ❌ CLEAR ALL
  const clearAll = () => {
    setYtHistory([]);
    localStorage.removeItem("ytHistory");
  };

  return (
    <div className="calc-container">
      <h1>📺 YouTube Earnings</h1>

      <input
        placeholder="Views"
        value={views}
        onChange={(e) => setViews(e.target.value)}
      /><br /><br />

      <input
        placeholder="CPM"
        value={cpm}
        onChange={(e) => setCpm(e.target.value)}
      /><br /><br />

      <button onClick={calculate}>Calculate</button>

      <h2>{result && `$${result}`}</h2>

      {/* HISTORY */}
      {ytHistory.length > 0 && (
        <div>
          <h3>📜 History</h3>

          <button onClick={clearAll}>❌ Clear All</button>

          {ytHistory.map((item, index) => (
            <div key={index}>
              {item.views} views | CPM {item.cpm} → {item.result}
              <button onClick={() => deleteItem(index)}>🗑️</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* OTHER CALCULATORS SAME AS YOUR CODE (NO CHANGE) */

function About() {
  return (
    <div style={{ padding: "40px", maxWidth: "800px", margin: "auto" }}>
      <h1>About CalcHub</h1>

      <p>
        CalcHub is a free online calculator platform designed to simplify everyday
        calculations. Whether you need to calculate GST, EMI, profit margins, or discounts,
        CalcHub provides fast and accurate tools that help you get results instantly.
      </p>

      <p>
        Our goal is to make complex calculations easy and accessible for everyone,
        including students, professionals, and business owners. Instead of performing
        manual calculations, users can rely on our tools to get precise results in seconds.
      </p>

      <p>
        All calculators on CalcHub are built using standard mathematical formulas
        to ensure accuracy and reliability. We continuously improve our platform
        by adding new tools and enhancing user experience.
      </p>

      <p>
        CalcHub is completely free to use and does not require any registration.
        Our mission is to provide simple, fast, and reliable calculation tools
        for users worldwide.
      </p>
    </div>
  );
}

function Contact() {
  return (
    <div style={{ padding: "40px", maxWidth: "800px", margin: "auto" }}>
      <h1>Contact Us</h1>

      <p>
        If you have any questions, suggestions, or feedback regarding CalcHub,
        we would love to hear from you.
      </p>

      <p>
        Your feedback helps us improve our calculators and provide a better
        experience for all users.
      </p>

      <p>
        For support, business inquiries, or general questions, please contact us at:
      </p>

      <p><strong>Email:</strong> calchub.support@gmail.com</p>

      <p>
        We aim to respond to all messages as quickly as possible.
      </p>
    </div>
  );
}

function PrivacyPolicy() {
  return (
    <div style={{ padding: "40px", maxWidth: "800px", margin: "auto" }}>
      <h1>Privacy Policy</h1>

      <p>
        At CalcHub, we value your privacy and are committed to protecting your
        personal information. This Privacy Policy explains how we handle data
        when you use our website.
      </p>

      <h2>Information We Collect</h2>
      <p>
        We do not require users to create an account or provide personal data.
        However, we may collect non-personal information such as browser type,
        device information, and usage data to improve our services.
      </p>

      <h2>How We Use Information</h2>
      <p>
        The information collected is used to improve website performance,
        enhance user experience, and analyze how users interact with our tools.
      </p>

      <h2>Cookies</h2>
      <p>
        CalcHub may use cookies to improve functionality and user experience.
        Cookies help us understand user behavior and optimize our website.
      </p>

      <h2>Third-Party Services</h2>
      <p>
        We may use third-party services such as Google AdSense to display ads.
        These services may use cookies to provide relevant advertisements.
      </p>

      <h2>Data Security</h2>
      <p>
        We take reasonable steps to protect your information. However, no method
        of data transmission over the internet is completely secure.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy at any time. Changes will be posted
        on this page.
      </p>

      <h2>Contact</h2>
      <p>
        If you have any questions about this Privacy Policy, contact us at:
        calchub.support@gmail.com
      </p>
    </div>
  );
}

function GstGuide() {
  return (
    <div className="page">
      <h1>How GST is Calculated in India (Simple Guide)</h1>

      <p>
        Goods and Services Tax (GST) is a type of indirect tax applied to most goods and services in India.
        It replaced many older taxes and made the system simpler and more transparent.
      </p>

      <h2>What is GST?</h2>
      <p>
        GST is a percentage-based tax added to the price of a product or service.
        For example, if a product costs ₹100 and GST is 18%, the final price becomes ₹118.
      </p>

      <h2>GST Calculation Formula</h2>
      <p>
        GST Amount = (Original Price × GST Rate) ÷ 100
      </p>
      <p>
        Final Price = Original Price + GST Amount
      </p>

      <h2>Example</h2>
      <p>
        Original Price = ₹500 <br />
        GST Rate = 18% <br />
        GST Amount = ₹90 <br />
        Final Price = ₹590
      </p>

      <h2>Why Use a GST Calculator?</h2>
      <ul>
        <li>Instantly calculate tax</li>
        <li>Avoid mistakes</li>
        <li>Save time</li>
        <li>Get accurate results</li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        GST is an important part of daily transactions. Understanding how it works helps you make better financial decisions.
      </p>
    </div>
  );
}

function YoutubeGuide() {
  return (
    <div className="page">
      <h1>How YouTube Earnings Are Calculated</h1>

      <p>
        Many people wonder how much money YouTubers earn from their videos.
        The answer depends on something called CPM.
      </p>

      <h2>What is CPM?</h2>
      <p>
        CPM stands for "Cost Per 1000 Impressions". It means how much advertisers
        pay for 1000 views on a video.
      </p>

      <h2>YouTube Earnings Formula</h2>
      <p>
        Earnings = (Views ÷ 1000) × CPM
      </p>

      <h2>Example</h2>
      <p>
        Views = 50,000 <br />
        CPM = $3 <br />
        Earnings = $150
      </p>

      <h2>Factors That Affect Earnings</h2>
      <ul>
        <li>Audience country</li>
        <li>Video topic</li>
        <li>Ad engagement</li>
        <li>Season (ads pay more during holidays)</li>
      </ul>

      <h2>Why Use a YouTube Earnings Calculator?</h2>
      <ul>
        <li>Estimate income quickly</li>
        <li>Plan your content strategy</li>
        <li>Understand your growth potential</li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        YouTube earnings depend on multiple factors, but CPM is the key metric.
        Using a calculator helps you estimate income and plan better.
      </p>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/gst-guide" element={<GstGuide />} />
        <Route path="/youtube-earnings-guide" element={<YoutubeGuide />} />
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