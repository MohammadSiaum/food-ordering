import Link from "next/link";
import SectionHeader from "./SectionHeader";

export default function Footer() {
  return (
    <footer className="text-gray-700 border border-gray-400 rounded text-md mt-44 py-3 bg-gradient-to-r from-fuchsia-200 to-blue-300">
      <div className="grid grid-cols-4 p-10">
        <div className="space-y-1">
          <h2 className="text-lg mb-3 text-gray-900">Services</h2>
          <h4>Branding</h4>
          <h4>Design</h4>
          <h4>Marketing</h4>
          <h4>Advertisement</h4>
        </div>
        <div className="space-y-1">
          <h2 className="text-lg mb-3 text-gray-900">Company</h2>
          <h4>About us</h4>
          <h4>Contact</h4>
          <h4>Jobs</h4>
          <h4>Press kit</h4>
        </div>
        <div className="space-y-1">
          <h2 className="text-lg mb-3 text-gray-900">Legal</h2>
          <h4>Terms of use</h4>
          <h4>Privacy policy</h4>
          <h4>Cookie policy</h4>
        </div>
        <div className="space-y-1">
          <h2 className="text-lg mb-3 font-semibold text-fuchsia-900">
            Developper
          </h2>
          <h4>Name : Mohammad Siam</h4>
          <h4>Phone : 01645452599</h4>
          <h4>Office : Gulshan, Natun Bazar, Dhaka</h4>
          <h4>Address: Sayed Nagor, 10th Tola</h4>
        </div>
      </div>
      <div className="text-center">
        <h4>
          &copy; 2024 All rights reserved |{" "}
          <span className="text-fuchsia-950">Mohammad Siam</span>
        </h4>
      </div>
    </footer>
  );
}
