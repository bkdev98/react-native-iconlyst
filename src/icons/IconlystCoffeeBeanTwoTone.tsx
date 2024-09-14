import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCoffeeBeanTwoTone = ({
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
      d="M18.845 5.155c-1.369-1.371-3.382-1.917-5.663-1.537-2.2.367-4.403 1.56-6.203 3.36-1.8 1.801-2.994 4.005-3.361 6.204-.38 2.281.163 4.292 1.537 5.663C6.241 19.932 7.73 20.5 9.435 20.5q.697-.001 1.383-.118c2.2-.367 4.403-1.56 6.204-3.36 1.8-1.8 2.993-4.005 3.36-6.204.38-2.28-.166-4.294-1.537-5.663"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.358 4.93a10.2 10.2 0 0 0-2.915 1.59c-1.802 1.422-2.968 3.408-3.467 5.902-.912 4.56-4.195 6.118-6.333 6.649"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystCoffeeBeanTwoTone;
