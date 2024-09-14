import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGitForkBulk = ({
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
      d="M6.09 15.733v-1.285c0-.925 0-1.436.202-1.912a2.54 2.54 0 0 1 1.353-1.354c.477-.203.988-.203 1.913-.203h1.692V8.27h1.5v2.71h1.692c.925 0 1.435 0 1.913.203a2.54 2.54 0 0 1 1.352 1.354c.203.476.203.987.203 1.912v1.284h-1.5V14.45c0-.706 0-1.131-.084-1.33a1.05 1.05 0 0 0-.557-.556c-.196-.084-.622-.084-1.327-.084H9.558c-.705 0-1.131 0-1.327.084a1.05 1.05 0 0 0-.558.557c-.083.198-.083.624-.083 1.329v1.284z"
    />
    <G fill={props.color} opacity={0.4}>
      <Path d="M5.01 15.734a2 2 0 0 0-2 2v1.803a2 2 0 0 0 2 2h3.635a2 2 0 0 0 2-2v-1.803a2 2 0 0 0-2-2zM10.184 2.465a2 2 0 0 0-2 2v1.803a2 2 0 0 0 2 2h3.634a2 2 0 0 0 2-2V4.465a2 2 0 0 0-2-2zM13.356 17.734a2 2 0 0 1 2-2h3.634a2 2 0 0 1 2 2v1.803a2 2 0 0 1-2 2h-3.634a2 2 0 0 1-2-2z" />
    </G>
  </Svg>
);
export default IconlystGitForkBulk;
