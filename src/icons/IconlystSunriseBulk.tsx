import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSunriseBulk = ({
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
      d="M12.518 4.336a.85.85 0 0 0 .85-.85v-.03c0-.47-.38-.835-.85-.835a.864.864 0 0 0-.85.865c0 .47.38.85.85.85M6.79 5.5a.84.84 0 0 0-1.192-.02.862.862 0 0 0 .595 1.476.85.85 0 0 0 .616-1.436zM3.51 11.586a.85.85 0 0 0 0 1.7h.05c.469 0 .826-.381.826-.85 0-.47-.406-.85-.875-.85M21.468 11.586a.85.85 0 1 0 0 1.7h.043c.47 0 .828-.381.828-.85 0-.47-.401-.85-.871-.85M18.326 5.428l-.045.04c-.352.31-.364.827-.054 1.18a.84.84 0 0 0 .631.277.9.9 0 0 0 .591-.221.85.85 0 0 0-1.123-1.276M13.042 14.216l-.002-.001v-.001l-.003-.002-.002-.002c0-.006-.002-.002-.002-.002v-.002l-.003-.001a.7.7 0 0 0-.238-.155.78.78 0 0 0-.57.003.8.8 0 0 0-.23.152h-.002l-.002.003-.002.002q-.001.003-.002.002l-.002.002q-.002 0 0 0l-.002.002-2.574 2.58a.75.75 0 0 0 1.061 1.06l1.294-1.297v4.067a.75.75 0 0 0 1.5 0v-4.067l1.293 1.297a.75.75 0 0 0 1.062-1.06z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.515 7.016a5.43 5.43 0 0 0-5.423 5.42.5.5 0 0 0 .5.5h9.845a.5.5 0 0 0 .5-.5 5.427 5.427 0 0 0-5.422-5.42"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSunriseBulk;