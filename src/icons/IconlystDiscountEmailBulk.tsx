import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiscountEmailBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillOpacity={0.4}
      fillRule="evenodd"
      d="m18.668 5.949.007 6.486a.744.744 0 0 1 .473 1.37l-5.679 3.636a2.73 2.73 0 0 1-2.938 0l-5.678-3.636a.743.743 0 0 1 .471-1.37v-6.49c-1.72.84-2.824 2.68-2.824 4.9v6.048c0 1.583.557 3.009 1.568 4.017.904.9 2.077 1.376 3.392 1.376h9.072c1.319 0 2.493-.476 3.399-1.38 1.011-1.008 1.569-2.433 1.569-4.013v-6.048c0-2.217-1.107-4.055-2.832-4.896"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.494 11.564a.75.75 0 0 1-1.06 0 .755.755 0 0 1-.004-1.064.745.745 0 0 1 1.057-.003l.007.006a.75.75 0 0 1 0 1.06m-3.925.008a.75.75 0 0 1-1.06 0 .75.75 0 0 1 0-1.061l3.923-3.922a.749.749 0 1 1 1.06 1.06zm-.537-5.203h.007a.75.75 0 0 1 0 1.5.753.753 0 0 1-.753-.75c0-.414.332-.75.746-.75m7.098-1.676a1.76 1.76 0 0 0-1.756-1.748H8.615c-.968 0-1.755.788-1.755 1.757v8.607l4.48 2.868c.4.257.92.257 1.32 0l4.48-2.868z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDiscountEmailBulk;
