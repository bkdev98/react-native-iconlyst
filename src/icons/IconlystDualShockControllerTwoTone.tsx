import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDualShockControllerTwoTone = ({
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
      d="M18.461 6.245c-.574-.256-2.202-1.14-4.108.05-1.637 1.02-2.25.867-3.705 0-1.99-1.187-3.534-.306-4.108-.05-2.796 1.461-3.043 8.247-3.037 8.542-.032 1.308.189 2.736 1.517 3.277 1.251.462 2.274.227 2.947-.272.729-.541.659-1.097 1.854-1.786s4.313-.586 5.359 0 1.125 1.245 1.853 1.786c.674.499 1.696.733 2.947.272 1.33-.54 1.55-1.969 1.517-3.277.007-.295-.24-7.08-3.036-8.542"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.072 11.174v-.01M17.941 11.174v-.01M16.502 9.734h.01M16.502 12.604h.01"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.938 11.164a1.435 1.435 0 1 0-2.87 0 1.435 1.435 0 0 0 2.87 0"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystDualShockControllerTwoTone;
