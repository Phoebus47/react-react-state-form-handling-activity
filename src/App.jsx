import { useState } from "react"; //import useState มาใช้
import "./App.css";

function App() {
  const [email, setEmail] = useState(""); //ไว้ใช้เก็บและ set ค่า email ที่พิมพ์เข้ามา
  const [message, setMessage] = useState(""); //ไว้ใช้เก็บและ set ค่าข้อความที่จะแสดงผลออกไป
  const [isError, setIsError] = useState(false); // ไว้ใช้ตรวจสอบว่า email ที่กรอกเข้ามาเป็น email ไหม และ set สถานะที่ตรวจสอบแล้ว

  const validateEmail = (event) => {
    event.preventDefault(); //หยุดเว็บไม่ให้รีโหลด
    const emailPattern = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/; // สร้างกฎว่ารูปแบบอีเมลที่ถูกต้องต้องเป็นแบบไหน
    // ต่อไปจะใช้ if-else เพื่อตรวจสอบว่า email ที่เข้ามาเป็น email จริงไหม ถูกรูปแบบไหม
    if (emailPattern.test(email)) {
      console.log(email);
      setMessage(`✅ ${email}`);
      setIsError(false);
      setEmail(""); //แสดงข้อความเรียบร้อย เคลียร์ช่องกรอกข้อมูลด้วย user จะได้ไม่ต้องมานั่งลบข้อความที่คาอยู่เอง
    } else {
      setMessage("❌ Invalid Email Address");
      setIsError(true);
    }
  };

  // เก็บค่าจาก onChange เวลา user พิมพ์ email เข้ามา
  const updateEmail = (event) => {
    setEmail(event.target.value);
    setMessage("checking...");
    setIsError(false);
  };

  return (
    <div className="App">
      <h1>Email Validation App</h1>
      <form className="email-container" onSubmit={validateEmail}>
        {!isError && message && <h2 style={{ color: "green" }}>{message}</h2>}
        {isError ? <h2 style={{ color: "red" }}>{message}</h2> : null}
        {/* ใน input ระบุ 
         1. type ของ input
         2. value ว่าอ้างอิงมาจาก piece of state ตัวไหน
         3. ใช้ onChange เพื่อเก็บค่าทุกครั้งที่ input มีการเปลี่ยนแปลง
         4. อย่าลืมเขียน function เพื่ออัปเดตข้อมูลตามที่ user กรอกเข้ามา  */}
        <input
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={updateEmail}
        />
        <div className="buttons">
          <button type="submit">Validate</button>
          {/* ถ้าเป็น form เราจะไปใช้ onSubmit แทน */}
        </div>
      </form>
    </div>
  );
}

export default App;
