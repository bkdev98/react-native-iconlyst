import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBananaLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.298 14.414a13.68 13.68 0 0 0 5.448-5.758c.684-1.369 1.194-1.668 1.194-3.198v-1.07c0-1.105 2.217-1.065 2.217 0v1.285c0 1.223.6 1.74.756 2.952.456 3.534-.9 7.06-3.605 9.378-1.868 1.601-4.999 2.423-7.336 2.423-1.814 0-7.506-.92-6.931-3.066.164-.615.38-.744.713-.91.456-.225 1.057-.241 1.669-.25 2.033-.028 4.122-.784 5.875-1.786"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.722 6.631a12.38 12.38 0 0 1-6.109 3.757c-1.767.465-3.769.636-5.553.185-.537-.135-1.066-.262-1.517-.171-.33.066-.548.128-.836.627-1.006 1.741 3.754 3.878 5.34 4.303"
    />
  </Svg>
);
export default IconlystBananaLight;
