import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChristmasMugBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillOpacity={0.4}
      fillRule="evenodd"
      d="M13.705 6.685c-3.65 0-5.66-.76-6.06-1.16.19-.17.81-.54 2.25-.82 1.11-.22 2.43-.34 3.81-.34 3.65 0 5.67.77 6.06 1.16-.39.39-2.41 1.16-6.06 1.16m0-3.82c-1.48 0-2.9.13-4.1.37-2.33.46-3.5 1.23-3.5 2.29v12.21c0 2.95 2.77 4.63 7.6 4.63 4.69 0 7.6-1.77 7.6-4.63V5.525c0-2.1-4.78-2.66-7.6-2.66"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.065 8.865c-.37.63-.37 1.36-.37 2.69v1.49c0 1.33 0 2.06.37 2.7.24.4.58.74.98.98.53.3 1.12.35 2.06.35v-1.5c-.68 0-1.08-.03-1.3-.15-.18-.11-.33-.26-.44-.44-.17-.29-.17-.87-.17-1.94v-1.49c0-1.06 0-1.65.17-1.94.11-.18.26-.33.44-.43.22-.13.62-.16 1.3-.16v-1.5c-.94 0-1.53.05-2.06.36-.4.24-.74.58-.98.98M13.496 12.924a2.443 2.443 0 0 0-4.508-.14 2.43 2.43 0 0 0-.056 1.869l.318.839a.75.75 0 1 0 1.402-.532l-.318-.84a.93.93 0 0 1 .022-.718.94.94 0 0 1 .525-.495.943.943 0 0 1 1.21.54l1.81 4.946a.75.75 0 0 0 .962.446.75.75 0 0 0 .446-.962zM18.098 16.312l-.01-.01a.74.74 0 0 0-1.055.005.756.756 0 0 0 .535 1.285.75.75 0 0 0 .53-1.28M16.936 12.344h.39a.75.75 0 0 0 0-1.5h-.39v-.39a.75.75 0 0 0-1.5 0v.39h-.39a.75.75 0 0 0 0 1.5h.39v.39a.75.75 0 0 0 1.5 0z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChristmasMugBulk;
