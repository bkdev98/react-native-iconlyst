import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUsdCoinBold = ({
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
      d="M16.94 16.98a.75.75 0 0 1-1.061 0 .75.75 0 0 1 0-1.061c1.034-1.034 1.604-2.427 1.604-3.924s-.57-2.892-1.604-3.925a.75.75 0 1 1 1.061-1.061c1.317 1.317 2.043 3.087 2.043 4.986 0 1.897-.726 3.668-2.043 4.985m-4.19-.976v.446a.75.75 0 0 1-1.5 0v-.41h-.818a.75.75 0 0 1 0-1.5h1.962c.492 0 .893-.4.893-.891a.897.897 0 0 0-.893-.899h-.788a2.395 2.395 0 0 1-2.394-2.39c0-1.197.888-2.182 2.038-2.355V7.54a.75.75 0 0 1 1.5 0v.429h.817a.75.75 0 1 1 0 1.5h-1.961c-.493 0-.894.4-.894.891 0 .49.401.89.894.89h.788a2.4 2.4 0 0 1 2.393 2.399 2.39 2.39 0 0 1-2.037 2.355m-4.631.987a.75.75 0 0 1-1.061-.002c-2.74-2.752-2.74-7.228 0-9.979a.75.75 0 1 1 1.063 1.059c-2.122 2.13-2.122 5.73 0 7.861a.75.75 0 0 1-.002 1.061M12.001 2.5C6.762 2.5 2.5 6.761 2.5 12s4.262 9.5 9.501 9.5c5.237 0 9.499-4.262 9.499-9.5s-4.262-9.5-9.499-9.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUsdCoinBold;
