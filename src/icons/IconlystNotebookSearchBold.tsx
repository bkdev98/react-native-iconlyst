import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNotebookSearchBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.395 12.292c.703 0 1.375.134 1.992.378.208.082.445-.064.445-.288v-3.64a2.646 2.646 0 0 0-2.069-2.576.3.3 0 0 0-.062-.007h-9.29a.5.5 0 0 1 0-1h9.014a.3.3 0 0 0 .3-.3v-.897a2.14 2.14 0 0 0-.834-1.702 2.14 2.14 0 0 0-1.855-.383l-8.732 2.26A1.93 1.93 0 0 0 3.85 6.012v12.16a2.646 2.646 0 0 0 2.645 2.64h4.864c.242 0 .388-.275.272-.487a5.4 5.4 0 0 1-.666-2.604 5.436 5.436 0 0 1 5.43-5.43m-8.01 1.086a2.96 2.96 0 0 1 2.956-2.959.75.75 0 0 1 0 1.5 1.46 1.46 0 0 0-1.455 1.46.75.75 0 0 1-1.5 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.967 22.192a.75.75 0 0 1-.531-.22l-1.114-1.117a3.66 3.66 0 0 1-1.927.546 3.684 3.684 0 0 1-3.68-3.68c0-2.03 1.65-3.68 3.68-3.68 2.029 0 3.68 1.65 3.68 3.68a3.66 3.66 0 0 1-.662 2.105l1.085 1.085a.751.751 0 0 1-.531 1.28m-3.572-6.65c-1.202 0-2.18.978-2.18 2.18 0 1.201.978 2.18 2.18 2.18a2.17 2.17 0 0 0 1.436-.542l.028-.029a1 1 0 0 1 .069-.061c.399-.395.647-.944.647-1.549 0-1.201-.978-2.18-2.18-2.18"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNotebookSearchBold;
