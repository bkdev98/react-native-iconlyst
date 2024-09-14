import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebPageGridOutline = ({
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
      d="M3.99 3.897C4.976 2.841 6.379 2.25 8.034 2.25h8.435c1.66 0 3.062.59 4.045 1.648C21.492 4.948 22 6.399 22 8.026v7.948c0 1.627-.508 3.078-1.487 4.128-.984 1.057-2.386 1.648-4.046 1.648H8.033c-1.66 0-3.062-.59-4.046-1.648-.978-1.05-1.487-2.5-1.487-4.128V8.026c0-1.628.511-3.078 1.49-4.129M4 10.242v5.732c0 1.317.409 2.38 1.085 3.106.67.72 1.66 1.17 2.948 1.17h.272V10.242zm5.805 0v3.745H20.5v-3.745zm10.695-1.5H4v-.716c0-1.316.41-2.38 1.088-3.106.672-.72 1.661-1.17 2.945-1.17h8.435c1.289 0 2.277.45 2.948 1.17.675.726 1.084 1.789 1.084 3.106zm0 6.745H9.805v4.763h6.662c1.29 0 2.278-.45 2.948-1.17.676-.726 1.085-1.789 1.085-3.106zM5.788 6.55a.75.75 0 0 1 .75-.75h.056a.75.75 0 0 1 0 1.5h-.056a.75.75 0 0 1-.75-.75m2.486 0a.75.75 0 0 1 .75-.75h.055a.75.75 0 0 1 0 1.5h-.055a.75.75 0 0 1-.75-.75m2.487 0a.75.75 0 0 1 .75-.75h.055a.75.75 0 0 1 0 1.5h-.055a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWebPageGridOutline;
