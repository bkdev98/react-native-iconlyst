import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBitcoinShieldBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M19.855 5.136C19.152 4.43 13.525 2.5 12.5 2.5S5.848 4.43 5.144 5.136c-.56.562-.553.995-.51 3.394.019.975.043 2.302.043 4.14 0 6.406 7.6 8.785 7.678 8.808a.5.5 0 0 0 .29 0c.077-.023 7.679-2.402 7.679-8.808 0-1.828.024-3.15.04-4.122.045-2.414.053-2.848-.51-3.412"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.594 15.188c.446-.49.664-1.15.6-1.807a2.3 2.3 0 0 0-.64-1.364l.021-.018.02-.018a2.37 2.37 0 0 0 .6-1.811c-.107-1.135-1.073-2.028-2.233-2.113V7.85a.75.75 0 0 0-1.5 0v.19h-.918a.75.75 0 0 0-.75.75v6.42c0 .415.336.75.75.75h.918v.19a.75.75 0 0 0 1.5 0v-.201a2.35 2.35 0 0 0 1.632-.761m-1.741-3.938a.853.853 0 0 0 .849-.939c-.04-.426-.452-.77-.918-.77h-1.49v1.71zm-1.56 1.5h1.49c.475 0 .878.338.918.772a.84.84 0 0 1-.217.657.84.84 0 0 1-.631.281h-1.56z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBitcoinShieldBulk;
