import "./App.css";

export default function Footer() {
   return (
      <p className="footer">
         Coded and designed by
         <a
            className="footLink"
            href="https://github.com/monicahnyokabi/weather-web/"
            target="_blank"
            rel="noopener noreferrer"
         >
            {" "}
            Monicah &nbsp;Wambui.
         </a>{" "}
         Copyright@2024
         <a
            className="footLink"
            href="https://github.com/monicahnyokabi/weather-web"
            target="_blank"
            rel="noopener noreferrer"
         >
            {" "}
            GitHub
         </a>
      </p>
   );
}
