import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarMedalOutline = ({
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
      d="M12.614 17.075c-.33 0-.62-.22-.72-.53a5.75 5.75 0 0 0-3.82-3.82.75.75 0 0 1-.53-.72c0-.33.22-.62.53-.72a5.73 5.73 0 0 0 3.82-3.82c.1-.32.39-.53.72-.53s.62.22.72.53a5.75 5.75 0 0 0 3.82 3.82c.32.1.53.39.53.72s-.22.62-.53.72a5.75 5.75 0 0 0-3.82 3.82.75.75 0 0 1-.72.53m-2.48-5.07a7.2 7.2 0 0 1 2.48 2.48 7.2 7.2 0 0 1 2.48-2.48 7.2 7.2 0 0 1-2.48-2.48 7.2 7.2 0 0 1-2.48 2.48"
    />
    <Path
      fill={props.color}
      d="M19.274 15.085c-.33 0-.62-.22-.72-.53-.27-.88-.96-1.57-1.84-1.84a.75.75 0 0 1-.53-.72c0-.33.22-.62.53-.72.88-.27 1.57-.96 1.84-1.84.1-.32.39-.53.72-.53s.62.22.72.53c.27.88.96 1.57 1.84 1.84.32.1.53.39.53.72s-.22.62-.53.72c-.88.27-1.57.96-1.84 1.84a.75.75 0 0 1-.72.53m-.74-3.09c.28.21.52.46.74.74.21-.28.46-.52.74-.74-.28-.21-.52-.46-.74-.74-.21.28-.46.52-.74.74M12.614 21.755c-.33 0-.62-.22-.72-.53-.27-.88-.96-1.57-1.84-1.84a.75.75 0 0 1-.53-.72c0-.33.22-.62.53-.72.88-.27 1.57-.96 1.84-1.84.1-.32.39-.53.72-.53s.62.22.72.53c.27.88.96 1.57 1.84 1.84.32.1.53.39.53.72s-.22.62-.53.72c-.88.27-1.57.96-1.84 1.84a.75.75 0 0 1-.72.53m-.74-3.09c.28.22.52.46.74.74.21-.28.46-.52.74-.74-.28-.21-.52-.46-.74-.74-.21.28-.46.52-.74.74M12.614 8.425c-.33 0-.62-.22-.72-.53-.27-.88-.96-1.57-1.84-1.84a.75.75 0 0 1-.53-.72c0-.33.22-.62.53-.72.88-.27 1.57-.96 1.84-1.84.1-.32.39-.53.72-.53s.62.22.72.53c.27.88.96 1.57 1.84 1.84.32.1.53.39.53.72s-.22.62-.53.72c-.88.27-1.57.96-1.84 1.84a.75.75 0 0 1-.72.53m-.74-3.09c.28.22.52.46.74.74.21-.28.46-.52.74-.74-.28-.21-.52-.46-.74-.74-.22.28-.46.52-.74.74M5.954 15.085c-.33 0-.62-.22-.72-.53-.27-.88-.96-1.57-1.84-1.84a.75.75 0 0 1-.53-.72c0-.33.22-.62.53-.72.88-.27 1.57-.96 1.84-1.84.1-.32.39-.53.72-.53s.62.22.72.53c.27.88.96 1.57 1.84 1.84.32.1.53.39.53.72s-.22.62-.53.72c-.88.27-1.57.96-1.84 1.84a.75.75 0 0 1-.72.53m-.74-3.09c.28.21.52.46.74.74.21-.28.46-.52.74-.74-.28-.21-.52-.46-.74-.74-.21.28-.46.52-.74.74"
    />
  </Svg>
);
export default IconlystStarMedalOutline;
