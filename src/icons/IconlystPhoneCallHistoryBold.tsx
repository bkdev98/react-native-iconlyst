import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneCallHistoryBold = ({
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
      d="M19.846 14.867a39 39 0 0 1-.779-.756c-1.282-1.274-2.388-.842-3.278-.493-1.065.419-2.07.814-3.909-1.025-1.835-1.832-1.442-2.84-1.025-3.907.348-.89.782-2.001-.499-3.284a43 43 0 0 1-.767-.792c-.94-.99-1.62-1.706-2.577-1.718-.857-.047-1.696.514-2.99 1.81l-.089.09c-.287.28-1.049 1.025-1.058 2.48-.013 2.275 1.818 5.264 5.442 8.887 3.61 3.608 6.59 5.437 8.855 5.437h.024c1.453-.007 2.2-.77 2.48-1.056l.094-.091c1.292-1.292 1.814-2.158 1.805-2.988-.013-.961-.733-1.646-1.729-2.594"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.743 3.906a2.885 2.885 0 0 1 0 5.77 2.885 2.885 0 0 1 0-5.77m0 7.27a4.39 4.39 0 0 0 4.383-4.39 4.386 4.386 0 0 0-4.384-4.38 4.386 4.386 0 0 0-4.382 4.38 4.39 4.39 0 0 0 4.383 4.39"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.485 8.379a.747.747 0 0 0 1.029-.256.75.75 0 0 0-.256-1.03l-.785-.471V5.576a.75.75 0 0 0-1.5 0v1.47a.75.75 0 0 0 .364.643z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPhoneCallHistoryBold;
