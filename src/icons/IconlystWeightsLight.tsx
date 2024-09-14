import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWeightsLight = ({
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
      d="M5.922 13.528a1.03 1.03 0 0 0-.978 1.028q-.005 2.714 0 5.429c0 .552.444 1.004.996 1.015h1.053c.552-.011.995-.463.996-1.015q.005-2.715 0-5.43c0-.546-.431-1-.979-1.027zM14.74 21a1.03 1.03 0 0 0 .978-1.028q.003-2.714 0-5.429c-.001-.552-.445-1.003-.997-1.015h-1.053a1.02 1.02 0 0 0-.996 1.015q-.005 2.715 0 5.43A1.03 1.03 0 0 0 13.651 21z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.992 17.265h4.65m.031 0h-4.65M3.008 18.729v-2.93M17.654 15.799v2.93"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.611 4.335A1.03 1.03 0 0 0 7.8 5.497q.405 2.684.818 5.368c.085.545.591.925 1.138.853l1.04-.159c.545-.094.915-.607.833-1.153q-.405-2.685-.818-5.368a1.03 1.03 0 0 0-1.122-.868zM18.454 10.392a1.03 1.03 0 0 0 .813-1.163q-.405-2.684-.818-5.367a1.02 1.02 0 0 0-1.139-.853l-1.04.158a1.02 1.02 0 0 0-.833 1.154q.405 2.684.819 5.367a1.03 1.03 0 0 0 1.121.868z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.22 7.715 4.598-.7m.03-.005-4.598.7M20.55 4.812l.442 2.895M6.514 9.915 6.072 7.02"
    />
  </Svg>
);
export default IconlystWeightsLight;
