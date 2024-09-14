import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTidalCircleOutline = ({
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
      d="M12 3.75A8.25 8.25 0 0 0 3.75 12 8.25 8.25 0 0 0 12 20.25 8.25 8.25 0 0 0 20.25 12 8.25 8.25 0 0 0 12 3.75M2.25 12A9.75 9.75 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12 9.75 9.75 0 0 1 12 21.75 9.75 9.75 0 0 1 2.25 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.066 12.372a1.267 1.267 0 0 1 1.867 0l1.194 1.302a1.267 1.267 0 0 1 0 1.712l-1.194 1.302a1.267 1.267 0 0 1-1.867 0l-1.194-1.302a1.267 1.267 0 0 1 0-1.712zm.056 2.158.878.957.877-.957-.877-.957z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.066 8.239a1.267 1.267 0 0 1 1.867 0l1.194 1.302a1.267 1.267 0 0 1 0 1.712l-1.194 1.303a1.267 1.267 0 0 1-1.867 0l-1.194-1.303a1.267 1.267 0 0 1 0-1.712zm.056 2.158.878.957.877-.957L12 9.44z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.856 8.239a1.267 1.267 0 0 1 1.867 0l1.194 1.302a1.267 1.267 0 0 1 0 1.712l-1.194 1.303a1.267 1.267 0 0 1-1.867 0l-1.194-1.303a1.267 1.267 0 0 1 0-1.712zm.933 1.201-.877.957.877.957.878-.957zM7.277 8.239a1.267 1.267 0 0 1 1.868 0l1.193 1.302a1.267 1.267 0 0 1 0 1.712l-1.193 1.302a1.267 1.267 0 0 1-1.868 0l-1.194-1.302a1.267 1.267 0 0 1 0-1.712zM8.21 9.44l-.878.957.878.957.877-.957z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTidalCircleOutline;
