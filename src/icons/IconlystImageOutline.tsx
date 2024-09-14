import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystImageOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.3 2c3.385 0 5.66 2.371 5.66 5.899v8.152c0 3.528-2.275 5.899-5.66 5.899H7.65C4.27 21.95 2 19.579 2 16.051V7.899C2 4.371 4.27 2 7.65 2zm0 1.5H7.65C5.13 3.5 3.5 5.227 3.5 7.899v8.152c0 2.673 1.63 4.399 4.15 4.399h8.65c2.527 0 4.16-1.726 4.16-4.399V7.899c0-2.672-1.633-4.399-4.16-4.399m.64 8.6.025.022.02.018.012.013.056.055c.18.18.679.69 2.164 2.215a.75.75 0 1 1-1.074 1.046s-2.049-2.103-2.195-2.245a.92.92 0 0 0-.649-.177.93.93 0 0 0-.632.337c-2.324 2.82-2.352 2.846-2.39 2.883a2.184 2.184 0 0 1-3.086-.032s-.93-.944-.946-.963c-.23-.214-.643-.2-.89.061l-1.53 1.613a.747.747 0 0 1-1.06.028.75.75 0 0 1-.028-1.059l1.528-1.613a2.156 2.156 0 0 1 3.037-.09l.958.971c.267.27.701.275.97.011.1-.119 2.278-2.764 2.278-2.764a2.43 2.43 0 0 1 1.647-.876 2.45 2.45 0 0 1 1.784.545M8.558 6.628a2.51 2.51 0 0 1 2.505 2.504 2.51 2.51 0 0 1-2.505 2.505 2.507 2.507 0 0 1-2.504-2.505 2.506 2.506 0 0 1 2.504-2.504m-.001 1.5a1.004 1.004 0 1 0 .002 2.009 1.004 1.004 0 0 0-.002-2.01"
    />
  </Svg>
);
export default IconlystImageOutline;
