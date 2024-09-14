import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTerminalOutline = ({
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
      d="M3.99 3.897C4.976 2.841 6.379 2.25 8.034 2.25h8.435c1.66 0 3.062.59 4.045 1.648C21.492 4.948 22 6.399 22 8.026v7.948c0 1.627-.508 3.078-1.487 4.129-.984 1.056-2.387 1.647-4.046 1.647H8.033c-1.66 0-3.062-.59-4.046-1.647-.978-1.05-1.487-2.501-1.487-4.13V8.027c0-1.628.511-3.078 1.49-4.129M5.089 4.92C4.41 5.647 4 6.71 4 8.026v7.948c0 1.318.409 2.38 1.085 3.107.67.72 1.66 1.169 2.948 1.169h8.434c1.29 0 2.278-.45 2.948-1.17.676-.725 1.085-1.788 1.085-3.106V8.026c0-1.317-.409-2.38-1.084-3.106-.67-.72-1.66-1.17-2.948-1.17H8.033c-1.284 0-2.273.45-2.945 1.17"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.219 15.191a.75.75 0 0 1 .75-.75h3.304a.75.75 0 0 1 0 1.5h-3.304a.75.75 0 0 1-.75-.75M7.698 9.34a.75.75 0 0 1 1.06 0l2.373 2.373a.75.75 0 0 1 0 1.06l-2.372 2.373a.75.75 0 0 1-1.06-1.061l1.841-1.842-1.842-1.842a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTerminalOutline;
