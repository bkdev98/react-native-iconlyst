import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShoppingBagMusicBold = ({
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
      d="M12.116 15.94v-.011a.937.937 0 0 0-.935-.927.937.937 0 0 0 0 1.873.94.94 0 0 0 .936-.931z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.706 6.878c.152-1.68 1.552-3.002 3.27-3.002 1.752.026 3.131 1.323 3.28 3.002zm6.512 5.528a.757.757 0 0 1-.885.586 2.8 2.8 0 0 1-.717-.25v3.177l.002.02a2.44 2.44 0 0 1-2.437 2.436 2.44 2.44 0 0 1-2.436-2.437 2.44 2.44 0 0 1 2.436-2.436c.331 0 .647.068.935.188v-2.812a.75.75 0 0 1 1.45-.27c.01.024.32.762 1.066.915a.75.75 0 0 1 .586.883m5.665 3.444-.737-5.7c-.53-2.413-2.088-3.272-3.368-3.272h-.023c-.155-2.512-2.238-4.509-4.783-4.502-2.535 0-4.602 1.987-4.765 4.505-1.272.018-2.892.883-3.335 3.313l-.728 5.645c-.292 1.95-.024 3.373.821 4.355.83.963 2.178 1.43 4.123 1.43h7.817c1.766 0 3.162-.534 4.038-1.544.88-1.015 1.196-2.441.94-4.23"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystShoppingBagMusicBold;
