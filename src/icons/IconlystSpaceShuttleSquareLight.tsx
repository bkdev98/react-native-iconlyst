import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSpaceShuttleSquareLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.897 3.348h8.435c2.948 0 4.782 2.082 4.782 5.028v7.946c0 2.946-1.834 5.026-4.783 5.026H7.897c-2.948 0-4.783-2.08-4.783-5.026V8.376c0-2.946 1.844-5.028 4.783-5.028"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.483}
      d="M11.438 11.017a1.73 1.73 0 0 1 1.328 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.46 13.423 1.227 1.484a11.7 11.7 0 0 0 2.323 2.142l.363.253c.627.437 1 1.153 1 1.918M8.769 13.423l-1.226 1.484a11.7 11.7 0 0 1-2.323 2.142l-.363.253c-.627.437-1 1.153-1 1.918M12.16 17.824v3.524M8.872 20.73v-8.942c0-1.706.678-3.342 1.884-4.548a1.984 1.984 0 0 1 2.805 0 6.43 6.43 0 0 1 1.883 4.548v8.943"
    />
  </Svg>
);
export default IconlystSpaceShuttleSquareLight;
