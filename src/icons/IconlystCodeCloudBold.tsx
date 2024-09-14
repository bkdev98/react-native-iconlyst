import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCodeCloudBold = ({
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
      d="M7.972 17.836c-1.357 0-1.486-.427-1.486-2.418 0-1.02 0-2.462-.818-3.418.819-.956.818-2.399.818-3.418 0-1.99.129-2.418 1.486-2.418a1 1 0 1 0 0-2c-3.486 0-3.486 2.765-3.486 4.418C4.486 10.572 4.358 11 3 11a1 1 0 1 0 0 2c1.358 0 1.486.427 1.486 2.418 0 1.652 0 4.418 3.486 4.418a1 1 0 1 0 0-2"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.188 13.009c0-1.127-.691-1.961-1.73-2.154-.198-.95-.992-2.048-2.457-2.048s-2.26 1.098-2.458 2.048c-1.037.193-1.728 1.027-1.728 2.154 0 .86.506 1.647 1.309 2.01.28.113.589.175.87.175h4.01c.286 0 .595-.061.894-.182a2.2 2.2 0 0 0 1.29-2.003"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21 11c-1.357 0-1.485-.427-1.485-2.418 0-1.652 0-4.418-3.487-4.418a1 1 0 0 0 0 2c1.358 0 1.487.427 1.487 2.418 0 1.02 0 2.462.817 3.418-.818.956-.817 2.4-.817 3.418 0 1.991-.129 2.418-1.487 2.418a1 1 0 0 0 0 2c3.487 0 3.487-2.765 3.487-4.418 0-1.99.128-2.418 1.485-2.418a1 1 0 1 0 0-2"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCodeCloudBold;
