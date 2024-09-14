import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSubtitleExploreTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.326 11.386v-2.97c.008-3.017-1.815-4.658-4.758-4.658H8.109c-2.934 0-4.766 1.641-4.766 4.658V15.5c0 3.064 1.832 4.743 4.766 4.743h4.225"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.333 8.574H3.334M12.49 12.375h-.535m-4.418 3.457h2.21m-.497-3.457H7.596"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m19.866 18.78 1.468 1.463m-3.453-6.516a2.916 2.916 0 1 1-.001 5.832 2.916 2.916 0 0 1 0-5.832"
    />
  </Svg>
);
export default IconlystSubtitleExploreTwoTone;
