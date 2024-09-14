import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReceiptBillSearchOutline = ({
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
      d="M11.353 21.283a.747.747 0 0 1-.977.41L8.2 20.807a1.06 1.06 0 0 0-.859.023l-.771.37a1.97 1.97 0 0 1-2.821-1.78l.01-12.438c0-1.363.38-2.562 1.195-3.427.82-.87 1.991-1.305 3.378-1.305h7.408c1.39 0 2.556.436 3.37 1.309.808.865 1.179 2.064 1.179 3.423v4.291a.75.75 0 1 1-1.5 0v-4.29c0-.6-.09-1.11-.248-1.532a2.6 2.6 0 0 0-.527-.87c-.47-.505-1.202-.831-2.274-.831H8.333c-1.069 0-1.81.326-2.287.834a2.75 2.75 0 0 0-.617 1.115c-.11.37-.17.797-.17 1.285L5.25 19.422c0 .348.361.574.674.426l.772-.37a2.56 2.56 0 0 1 2.072-.06l2.174.889a.75.75 0 0 1 .411.976"
    />
    <Path
      fill={props.color}
      d="M14.545 9.629a.74.74 0 0 1-.42.129h-4.97a.75.75 0 0 1 0-1.5h4.97a.75.75 0 0 1 .42 1.37M12.096 13.463a.74.74 0 0 1-.454.154H9.158a.75.75 0 0 1 0-1.5h2.484a.75.75 0 0 1 .454 1.346"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.4 20.441a3.442 3.442 0 1 1 .984-1.139l1.058 1.057a.75.75 0 0 1-1.06 1.063zm-.107-2.763a1.942 1.942 0 1 0-3.883-.004 1.942 1.942 0 0 0 3.883.004"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystReceiptBillSearchOutline;
