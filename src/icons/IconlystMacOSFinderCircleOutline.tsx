import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMacOSFinderCircleOutline = ({
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
      d="M12 21.754c-5.38 0-9.75-4.37-9.75-9.75s4.37-9.75 9.75-9.75 9.75 4.37 9.75 9.75-4.37 9.75-9.75 9.75m0-18c-4.55 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25"
    />
    <Path
      fill={props.color}
      d="M13.72 21.574c-.35 0-.66-.25-.73-.6-.27-1.37-.47-2.74-.57-4.08-.13-1.56-.12-2.62-.1-3.07-.4-.02-.82-.05-1.31-.12-1.21-.15-1.42-.88-1.47-1.64-.07-1.43.97-7.25 1.38-9.22a.74.74 0 0 1 .89-.58c.41.08.67.48.58.89-.5 2.45-1.4 7.74-1.35 8.83 0 .1.01.16.02.21.03 0 .08.02.15.02.57.08 1.03.11 1.44.11.37 0 .67.11.88.33.33.34.31.77.29 1.12-.01.3-.04 1.36.1 2.99.1 1.28.29 2.59.55 3.9.08.41-.18.8-.59.88-.05 0-.1.01-.15.01z"
    />
    <Path
      fill={props.color}
      d="M11.85 17.854c-1.9 0-3.72-.7-5.13-1.96a.756.756 0 0 1-.06-1.06c.28-.31.75-.33 1.06-.06a6.17 6.17 0 0 0 4.13 1.58c1.66 0 3.23-.65 4.41-1.84.29-.29.77-.29 1.06 0s.29.77 0 1.06a7.67 7.67 0 0 1-5.47 2.28M16.43 10.165c-.41 0-.75-.34-.75-.75v-1.13c0-.41.34-.75.75-.75s.75.34.75.75v1.13c0 .41-.34.75-.75.75m-8.86 0c-.41 0-.75-.34-.75-.75v-1.13c0-.41.34-.75.75-.75s.75.34.75.75v1.13c0 .41-.34.75-.75.75"
    />
  </Svg>
);
export default IconlystMacOSFinderCircleOutline;
