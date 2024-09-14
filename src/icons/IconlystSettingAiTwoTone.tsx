import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSettingAiTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.269 12.004v-.012c0-.35.076-.698.257-1l.589-.981a1.82 1.82 0 0 0 .107-1.67 9 9 0 0 0-.944-1.634 1.82 1.82 0 0 0-1.5-.74l-1.143.018a1.9 1.9 0 0 1-.997-.279l-.01-.006a1.93 1.93 0 0 1-.737-.721l-.556-1.001a1.82 1.82 0 0 0-1.394-.929 9 9 0 0 0-1.886.002 1.82 1.82 0 0 0-1.391.928l-.554 1a1.93 1.93 0 0 1-.741.724l-.012.006a1.9 1.9 0 0 1-.992.276l-1.144-.019a1.84 1.84 0 0 0-1.524.773 9 9 0 0 0-.905 1.57 1.84 1.84 0 0 0 .094 1.704l.588.979a1.94 1.94 0 0 1 .257 1.014c0 .353-.076.7-.257 1.001l-.589.982a1.82 1.82 0 0 0-.108 1.67c.257.576.574 1.124.945 1.634.347.477.91.75 1.5.74l1.143-.019c.351-.006.691.103.996.279l.01.006c.304.175.567.415.738.722l.556 1c.286.518.806.868 1.393.93.628.066 1.26.065 1.887-.002a1.82 1.82 0 0 0 1.39-.928l.556-1a1.93 1.93 0 0 1 .739-.723l.01-.006c.305-.176.644-.284.995-.278l1.142.02a1.84 1.84 0 0 0 1.525-.774 9 9 0 0 0 .905-1.57 1.85 1.85 0 0 0-.094-1.704l-.587-.98a1.93 1.93 0 0 1-.257-1.002"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.206 13.824-.093-.252a3.47 3.47 0 0 0-2.048-2.051l-.251-.093.251-.094a3.47 3.47 0 0 0 2.048-2.05l.093-.252.094.252c.35.95 1.099 1.699 2.047 2.05l.252.094-.252.093a3.47 3.47 0 0 0-2.047 2.05zM15.102 14.969a1.63 1.63 0 0 0-1.085-1.087c.52-.158.926-.566 1.085-1.086.158.52.564.928 1.084 1.086a1.63 1.63 0 0 0-1.085 1.087"
    />
  </Svg>
);
export default IconlystSettingAiTwoTone;
