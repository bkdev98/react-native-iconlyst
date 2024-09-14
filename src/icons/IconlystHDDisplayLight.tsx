import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHDDisplayLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.862 3.656h9.943a4.03 4.03 0 0 1 4.029 4.03v5.456a4.03 4.03 0 0 1-4.03 4.029H7.863a4.03 4.03 0 0 1-4.028-4.03V7.686a4.03 4.03 0 0 1 4.028-4.029M8.338 20.344h8.991M8.617 8.035v4.99m0-2.495h3.327m0-2.495v4.99"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.271 13.026h-.832v-4.99h.832a2.495 2.495 0 0 1 0 4.99"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHDDisplayLight;
