import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletEditOutline = ({
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
      d="M17.442 10.078a1.781 1.781 0 1 0 0 3.563h3.807a.75.75 0 0 1 0 1.5h-3.807a3.282 3.282 0 0 1 0-6.563h3.807a.75.75 0 0 1 0 1.5z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.494 11.805a.75.75 0 0 1 .75-.75h.003a.75.75 0 0 1 0 1.5h-.003a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.186 4.422A4.186 4.186 0 0 0 4 8.608v2.988a.75.75 0 0 1-1.5 0V8.608a5.686 5.686 0 0 1 5.686-5.686h8.128A5.686 5.686 0 0 1 22 8.608v6.75a5.686 5.686 0 0 1-5.686 5.685h-4.367a.75.75 0 0 1 0-1.5h4.367a4.186 4.186 0 0 0 4.186-4.186v-6.75a4.186 4.186 0 0 0-4.186-4.185z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m8.632 13.964-3.574 3.9c-.167.189-.273.426-.3.679l-.092.845a.17.17 0 0 0 .196.186l.822-.137c.273-.046.523-.183.707-.389l.006-.007 3.54-3.862.002-.003a.376.376 0 0 0-.02-.532l-.755-.7a.38.38 0 0 0-.532.02m-1.103-1.017a1.877 1.877 0 0 1 2.653-.105v.001l.755.699c.761.704.806 1.891.104 2.652L7.506 20.05c-.411.46-.967.764-1.574.866l-.82.137a1.67 1.67 0 0 1-1.937-1.826l.091-.847a2.73 2.73 0 0 1 .676-1.52l.006-.007z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWalletEditOutline;
