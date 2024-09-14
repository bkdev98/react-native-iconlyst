import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaneCloseBold = ({
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
      fillRule="evenodd"
      d="M9.203 16.226A626 626 0 0 0 19.413 12c1.356-.57 2.608-1.924 2.154-3.553-.195-.696-.618-1.23-1.225-1.54-1.166-.6-2.569-.203-3.11-.005-1.09.385-2.133.845-3.217 1.285a187 187 0 0 0-3.58-3.192c-.818-.72-1.666-.978-2.51-.777-.489.112-.95.29-1.399.462q-.252.098-.512.194a.747.747 0 0 0-.439.992l2.06 4.988-1.785.753c-.65.276-1.302.55-1.854.783l-.302-.734a.748.748 0 1 0-1.388.566c.09.22.446 1.085.541 1.31.875 2.053 2.38 3.142 4.212 3.142.675 0 1.395-.147 2.144-.45M13.53 20.09H4.945a.75.75 0 0 0 0 1.5h8.585a.75.75 0 0 0 0-1.5M21.53 20.22l-1.217-1.217 1.182-1.184a.749.749 0 1 0-1.063-1.059l-1.179 1.182-1.213-1.213a.75.75 0 0 0-1.06 1.06l1.214 1.215-1.184 1.185a.75.75 0 0 0 1.063 1.06l1.182-1.185 1.214 1.216a.75.75 0 0 0 1.061-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPlaneCloseBold;
