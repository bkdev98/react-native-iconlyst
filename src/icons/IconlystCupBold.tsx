import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCupBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="m14.23 8.293-.64.614.15.862a.658.658 0 0 1-.95.689l-.83-.433-.75.433a.64.64 0 0 1-.496.045.65.65 0 0 1-.385-.321.64.64 0 0 1-.068-.408l.152-.865-.636-.611a.647.647 0 0 1-.017-.921.65.65 0 0 1 .385-.193l.924-.133.347-.78a.656.656 0 0 1 1.166-.01l.004.01.417.83.86.084a.649.649 0 0 1 .368 1.108m7.49-2.851a.75.75 0 0 0-.744-.666h-2.463c.034-.56.037-.933.037-1.01a.5.5 0 0 0-.5-.5H5.95a.5.5 0 0 0-.5.5c0 .078.003.45.037 1.01H3.024a.75.75 0 0 0-.745.666c-.02.174-.443 4.28 2.712 6.356a.752.752 0 0 0 1.039-.214.75.75 0 0 0-.215-1.04C4.089 9.41 3.79 7.34 3.755 6.277h1.873c.389 3.129 1.637 8.114 5.62 8.678v1.755H8.904a.5.5 0 0 0-.477.347l-.697 2.176H6.399a.75.75 0 0 0 0 1.5h11.345a.75.75 0 0 0 0-1.5h-1.332l-.696-2.175a.5.5 0 0 0-.476-.348h-2.492v-1.753c3.992-.556 5.238-5.548 5.626-8.68h1.87c-.034 1.063-.333 3.134-2.06 4.269a.75.75 0 1 0 .825 1.253c3.155-2.075 2.732-6.182 2.712-6.356"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCupBold;
