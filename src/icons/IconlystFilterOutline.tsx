import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFilterOutline = ({
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
      d="M17.674 9.139a.75.75 0 0 1-.75.75H13.37a2.152 2.152 0 0 1-4.033 0h-.762a.75.75 0 1 1 0-1.5h.761a2.15 2.15 0 0 1 2.032-1.4 2.15 2.15 0 0 1 2 1.4h3.556a.75.75 0 0 1 .75.75m-5.672-.059a.64.64 0 0 0-.266-.467.64.64 0 0 0-.38-.125.66.66 0 0 0-.66.65.66.66 0 0 0 .66.651.64.64 0 0 0 .646-.601 1 1 0 0 1 0-.108M7.825 14.861a.75.75 0 0 1 .75-.75h3.556a2.152 2.152 0 0 1 4.033 0h.76a.75.75 0 0 1 0 1.5h-.76a2.16 2.16 0 0 1-2.031 1.4 2.15 2.15 0 0 1-2-1.4H8.575a.75.75 0 0 1-.75-.75m5.674.02c.01.342.294.627.645.63a.66.66 0 0 0 .66-.65.66.66 0 0 0-.659-.65.64.64 0 0 0-.647.611l.001.04z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.49 3.896C5.475 2.842 6.876 2.25 8.532 2.25h8.435c1.659 0 3.062.592 4.046 1.648.978 1.05 1.487 2.5 1.487 4.127v7.95c0 1.627-.509 3.078-1.487 4.127-.985 1.056-2.388 1.648-4.047 1.648H8.532c-1.66 0-3.062-.592-4.046-1.648C3.508 19.05 3 17.602 3 15.975v-7.95c0-1.627.511-3.078 1.49-4.129M5.587 4.92C4.91 5.646 4.5 6.71 4.5 8.025v7.95c0 1.316.409 2.379 1.084 3.105.466.5 1.084.87 1.85 1.049q.507.12 1.098.121h8.434c1.29 0 2.279-.45 2.949-1.17.676-.726 1.085-1.789 1.085-3.105v-7.95c0-1.316-.409-2.379-1.085-3.105-.67-.72-1.66-1.17-2.948-1.17H8.532c-1.284 0-2.273.45-2.945 1.17"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFilterOutline;
