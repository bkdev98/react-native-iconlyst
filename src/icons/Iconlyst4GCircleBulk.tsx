import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Iconlyst4GCircleBulk = ({
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
      d="M12 2.5c-5.238 0-9.5 4.261-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.426 15.33c1.403 0 2.241-.722 2.241-1.93v-1.431a.75.75 0 0 0-.75-.75h-1.491a.75.75 0 0 0 0 1.5h.741v.68c0 .202 0 .43-.741.43-.458 0-.86-.165-1.16-.48-.348-.362-.534-.901-.51-1.48.02-.504.247-.99.621-1.331a1.63 1.63 0 0 1 1.142-.43q.399.023.721.188a.75.75 0 1 0 .688-1.333 3.2 3.2 0 0 0-1.33-.352 3.1 3.1 0 0 0-2.232.818 3.43 3.43 0 0 0-1.109 2.379c-.041.984.297 1.924.926 2.58a3.07 3.07 0 0 0 2.243.942m-4.691-1.191h.259a.75.75 0 0 0 0-1.5h-.259v-3.29a.75.75 0 0 0-1.359-.437l-2.903 4.04a.748.748 0 0 0 .609 1.187h2.153v.44a.75.75 0 0 0 1.5 0zm-1.5-2.46v.96h-.69z"
      clipRule="evenodd"
    />
  </Svg>
);
export default Iconlyst4GCircleBulk;
