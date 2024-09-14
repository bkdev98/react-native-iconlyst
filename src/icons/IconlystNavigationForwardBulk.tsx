import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNavigationForwardBulk = ({
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
      d="m9.776 5.773 1.472-1.128v5.071a.75.75 0 0 0 1.5 0V4.645l1.472 1.128a.746.746 0 0 0 1.051-.14.75.75 0 0 0-.139-1.051l-2.677-2.053c-.033-.025-.072-.038-.108-.057-.028-.015-.053-.032-.083-.044a.8.8 0 0 0-.253-.051l-.013-.002-.01.002a.8.8 0 0 0-.256.051c-.03.012-.056.03-.084.045-.035.019-.073.031-.106.056L8.864 4.582a.75.75 0 1 0 .912 1.191"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m18.364 17.702-4.44-3.946a2.9 2.9 0 0 0-3.848 0l-4.44 3.946a2.19 2.19 0 0 0-.52 2.67c.392.792 1.14 1.252 1.98 1.252q.226 0 .458-.044l4.114-.81.57-.007 4.208.817c1.019.19 1.978-.275 2.439-1.207.46-.932.256-1.981-.521-2.671"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystNavigationForwardBulk;
