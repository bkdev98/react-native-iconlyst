import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBookmarkAiLight = ({
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
      d="M19.227 6.586c0-2.562-1.75-3.586-4.27-3.586H9.04c-2.442 0-4.272.956-4.272 3.415v13.701a.882.882 0 0 0 1.316.771l5.942-3.331 5.888 3.325a.884.884 0 0 0 1.318-.77z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.252 11.707-.091-.246a3.38 3.38 0 0 0-1.997-2l-.245-.09.245-.091a3.38 3.38 0 0 0 1.997-2l.09-.245.091.245a3.38 3.38 0 0 0 1.997 2l.245.09-.245.092a3.38 3.38 0 0 0-1.997 1.999zM15.024 12.823a1.59 1.59 0 0 0-1.058-1.06 1.59 1.59 0 0 0 1.058-1.058c.154.507.55.904 1.057 1.059a1.59 1.59 0 0 0-1.057 1.059"
    />
  </Svg>
);
export default IconlystBookmarkAiLight;
