import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiscountEmailBold = ({
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
      fillRule="evenodd"
      d="M18.951 6.099c-.128-.074-.283.022-.283.17l.007 5.947c0 .117.103.207.218.23a.73.73 0 0 1 .483.323.75.75 0 0 1-.228 1.036l-5.679 3.636a2.73 2.73 0 0 1-2.938 0l-5.678-3.636a.75.75 0 0 1-.228-1.036.73.73 0 0 1 .481-.324c.116-.022.218-.111.218-.229v-5.95c0-.148-.155-.244-.283-.17C3.484 6.992 2.5 8.749 2.5 10.845v6.048c0 1.583.557 3.009 1.568 4.017.904.9 2.077 1.376 3.392 1.376h9.072c1.319 0 2.493-.476 3.399-1.38 1.011-1.008 1.569-2.433 1.569-4.013v-6.048c0-2.093-.987-3.849-2.549-4.746"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.04 11.791a.749.749 0 0 1-.53-1.28l3.922-3.923a.749.749 0 1 1 1.06 1.061l-3.923 3.922a.74.74 0 0 1-.53.22m-.008-5.422h.007a.75.75 0 1 1-.753.75c0-.414.332-.75.746-.75m4.462 5.194a.74.74 0 0 1-.53.22.755.755 0 0 1-.534-1.284.746.746 0 0 1 1.057-.003l.007.007a.75.75 0 0 1 0 1.06m-1.834 4.614 4.388-2.809a.2.2 0 0 0 .092-.168l-.01-8.507a1.76 1.76 0 0 0-1.756-1.749H8.615c-.968 0-1.755.788-1.755 1.757V13.2a.2.2 0 0 0 .092.168l4.387 2.81c.401.256.92.256 1.321 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDiscountEmailBold;
