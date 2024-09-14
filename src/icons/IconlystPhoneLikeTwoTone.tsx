import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneLikeTwoTone = ({
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
      d="M20.099 12.38c.77-1.191.687-2.819-.56-3.629a2.4 2.4 0 0 0-1.075-.372c-.383-.037-.797.122-1.155.265-.238-.301-.517-.646-.865-.806-.35-.16-.73-.237-1.115-.222-1.487.076-2.38 1.437-2.313 2.855.088 2.243 2.62 4.378 2.62 4.378s3.212-.56 4.463-2.468"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.113 14.432v2.949A3.625 3.625 0 0 1 13.493 21H7.978a3.625 3.625 0 0 1-3.62-3.62V6.61c0-1.002.41-1.898 1.061-2.55A3.63 3.63 0 0 1 7.977 3h5.517a3.617 3.617 0 0 1 3.62 3.61V8.4"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.736 17.057v-.048m0-.253a.25.25 0 1 0 0 .5.25.25 0 0 0 0-.5"
    />
  </Svg>
);
export default IconlystPhoneLikeTwoTone;
