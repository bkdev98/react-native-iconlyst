import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPayoneerLight = ({
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
      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.381 8.409c1.268.755 2.284 1.775 3.819.635-.244 1.855-2.632 2.893-4.439 1.723-1.327-.804-1.922-1.546-3.802-.65.272-2.042 2.697-2.826 4.422-1.708M11.222 13.249c1.268.755 2.284 1.775 3.818.635-.243 1.854-2.632 2.893-4.438 1.723-1.327-.804-1.923-1.546-3.802-.65.271-2.042 2.697-2.826 4.422-1.709"
    />
  </Svg>
);
export default IconlystPayoneerLight;
