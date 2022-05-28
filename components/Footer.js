export default function Footer() {
  return (
    <footer>
      <div className="py-6 border-t-2 border-indigo-500">
        <p className="text-center">
          Created by:{" "}
          <a href="https://romeshkosme.com" target="_blank">
            <span className="underline">Romesh Kosme</span>
          </a>{" "}
          | &copy; {new Date().getFullYear()} Dory - Attendance Management
        </p>
      </div>
    </footer>
  );
}
