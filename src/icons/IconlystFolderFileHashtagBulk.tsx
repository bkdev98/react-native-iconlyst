import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderFileHashtagBulk = ({
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
      d="M16.62 5.364h-2.652a1.66 1.66 0 0 1-1.313-.657l-.856-1.14a2.66 2.66 0 0 0-2.111-1.054H7.813c-3.424 0-5.088 1.907-5.088 5.829v7.312c0 3.652 2.185 5.833 5.845 5.833h7.296c3.652 0 5.833-2.181 5.833-5.83l.026-4.658c0-3.845-1.622-5.635-5.105-5.635"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.49 12.704h.734a.75.75 0 0 0 0-1.5h-.543l.075-.596a.75.75 0 0 0-1.488-.189l-.1.785h-1.325l.075-.596a.75.75 0 0 0-1.488-.189l-.1.785h-.86a.75.75 0 0 0 0 1.5h.67l-.163 1.294h-.752a.75.75 0 0 0 0 1.5h.562l-.076.596a.75.75 0 0 0 .65.84.753.753 0 0 0 .839-.652l.099-.784h1.325l-.075.596a.75.75 0 1 0 1.488.188l.1-.784h.84a.75.75 0 0 0 0-1.5h-.65zm-1.676 1.294h-1.326l.164-1.294h1.326z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFolderFileHashtagBulk;
