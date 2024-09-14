import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBackward10s2Bulk = ({
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
      d="M17.408 3.07H9.74c-3.049 0-5.098 2.138-5.098 5.32v1.03l-.726-.004h-.003a.748.748 0 0 0-.595 1.206l1.467 1.915c.135.197.35.334.607.334l.01-.002.008.002c.043 0 .08-.02.121-.028.055-.01.113-.016.164-.039a.7.7 0 0 0 .19-.128q.024-.018.046-.037c.023-.024.054-.036.075-.062l1.49-1.944a.749.749 0 0 0-.593-1.206l-.76-.003V8.39c0-2.32 1.412-3.82 3.597-3.82h7.67c2.186 0 3.598 1.5 3.598 3.82v7.221c0 2.32-1.413 3.82-3.6 3.82H9.74c-2.185 0-3.598-1.5-3.598-3.82a.75.75 0 0 0-1.5 0c0 3.182 2.05 5.32 5.098 5.32h7.668c3.05 0 5.1-2.138 5.1-5.32v-7.22c0-3.183-2.049-5.32-5.099-5.32"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.617 14.563v-5.12a.75.75 0 0 0-1.5 0v5.12a.75.75 0 0 0 1.5 0M14.215 13.084v-2.16c0-.458.368-.83.821-.83s.821.372.821.83v2.16a.821.821 0 0 1-1.642 0m3.142 0v-2.16a2.33 2.33 0 0 0-2.32-2.33 2.33 2.33 0 0 0-2.322 2.33v2.16c0 1.279 1.041 2.319 2.321 2.319s2.321-1.04 2.321-2.32"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBackward10s2Bulk;
