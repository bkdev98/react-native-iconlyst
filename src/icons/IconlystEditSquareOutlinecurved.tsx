import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEditSquareOutlinecurved = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M12 22.396c-7.383 0-10-2.617-10-10s2.617-10 10-10a.75.75 0 0 1 0 1.5c-6.514 0-8.5 1.986-8.5 8.5s1.986 8.5 8.5 8.5 8.5-1.986 8.5-8.5a.75.75 0 0 1 1.5 0c0 7.383-2.617 10-10 10"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m19.237 9.782 1.058-1.195a3.156 3.156 0 0 0-.27-4.45 3.13 3.13 0 0 0-2.28-.785c-.84.05-1.61.427-2.168 1.057l-5.884 6.648c-1.824 2.058-.576 4.779-.522 4.894a.75.75 0 0 0 .452.395c.057.019.721.222 1.596.222.985 0 2.238-.26 3.19-1.335l4.668-5.271a.8.8 0 0 0 .16-.18m-8.829 5.21c.627.114 2.011.226 2.878-.753l4.251-4.8-2.471-2.189-4.249 4.802c-.888 1-.605 2.336-.409 2.94m5.652-8.865 2.472 2.188.64-.722a1.654 1.654 0 0 0-1.336-2.744c-.44.028-.843.224-1.136.554z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEditSquareOutlinecurved;
