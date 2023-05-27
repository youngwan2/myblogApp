import fs from "fs";
import image1 from "../../public/images/posts/review-2023.png";
import image2 from "../../public/images/posts/react18-walkthrough.png";
import image3 from "../../public/images/posts/best-react-practices.png";
import image4 from "../../public/images/posts/node-pro-tips.png";
import image5 from "../../public/images/posts/javascript-10-tips.png";

export type Props = {
  title: string;
  description: string;
  date: string;
  category: string;
  path: string;
  featured: boolean;
};

// 선택된 포스트 읽어오기
export default async function getFeaturedPost(): Promise<Props[]> {
  const response = await fs.promises.readFile(
    "./blog/data/posts.json",
    "utf-8"
  );
  const data = JSON.parse(response);
  const filterData = data.filter((data: Props) => {
    return data.featured === true;
  });
  return filterData;
}

export async function getAllPost() {
  const response = await fs.promises.readFile(
    "./blog/data/posts.json",
    "utf-8"
  );

  const data = JSON.parse(response);

  return data;
}

export function getImageData() {
  const images = [image1, image2, image3, image4, image5];

  return images;
}
