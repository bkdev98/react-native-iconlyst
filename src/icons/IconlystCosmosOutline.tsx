import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCosmosOutline = ({
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
      d="M12.25 21.75A9.75 9.75 0 1 1 22 12a9.76 9.76 0 0 1-9.75 9.75m0-18A8.25 8.25 0 1 0 20.5 12a8.26 8.26 0 0 0-8.25-8.25"
    />
    <Path
      fill={props.color}
      d="M8.475 16a1.822 1.822 0 0 1-1.76-2.29 1.82 1.82 0 0 1 .848-1.105l7.555-4.362a1.82 1.82 0 0 1 1.82 3.15l-7.556 4.363c-.276.16-.588.245-.907.245m-.28-1.66a.32.32 0 0 0 .319.158.3.3 0 0 0 .118-.041l7.556-4.362a.32.32 0 1 0-.32-.554l-7.555 4.363a.32.32 0 0 0-.118.437"
    />
    <Path
      fill={props.color}
      d="M16.023 16c-.318 0-.63-.083-.906-.243l-7.556-4.363a1.823 1.823 0 0 1-.667-2.485 1.82 1.82 0 0 1 2.486-.666l7.556 4.362a1.819 1.819 0 0 1-.913 3.4zm-7.83-6.34a.32.32 0 0 0 .118.435l7.555 4.363a.32.32 0 1 0 .32-.554L8.63 9.536a.325.325 0 0 0-.437.118z"
    />
    <Path
      fill={props.color}
      d="M12.25 18.183a1.82 1.82 0 0 1-1.82-1.82V7.636a1.82 1.82 0 1 1 3.64 0v8.725a1.823 1.823 0 0 1-1.82 1.822m0-10.864a.32.32 0 0 0-.32.32v8.724a.32.32 0 0 0 .64 0V7.636a.32.32 0 0 0-.32-.317"
    />
  </Svg>
);
export default IconlystCosmosOutline;
