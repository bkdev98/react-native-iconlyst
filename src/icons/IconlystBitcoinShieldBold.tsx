import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBitcoinShieldBold = ({
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
      d="M12.284 12.75h-1.49v1.71h1.56c.242 0 .466-.1.63-.281a.84.84 0 0 0 .217-.657c-.04-.434-.443-.772-.917-.772M12.353 11.25a.853.853 0 0 0 .849-.939c-.04-.426-.452-.771-.918-.771h-1.49v1.71z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.695 13.38a2.36 2.36 0 0 1-.601 1.807 2.35 2.35 0 0 1-1.632.761v.202a.75.75 0 0 1-1.5 0v-.19h-.918a.75.75 0 0 1-.75-.75V8.79a.75.75 0 0 1 .75-.75h.918v-.191a.75.75 0 0 1 1.5 0v.207c1.16.085 2.126.978 2.233 2.113a2.37 2.37 0 0 1-.6 1.811q-.02.018-.04.036c.35.368.59.838.64 1.364m4.66-8.244C18.652 4.43 13.025 2.5 12 2.5S5.348 4.43 4.644 5.136c-.56.562-.553.995-.51 3.394.019.975.043 2.302.043 4.14 0 6.406 7.6 8.785 7.678 8.808a.5.5 0 0 0 .29 0c.077-.023 7.679-2.402 7.679-8.808 0-1.828.024-3.15.04-4.122.045-2.414.053-2.848-.51-3.412"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBitcoinShieldBold;
