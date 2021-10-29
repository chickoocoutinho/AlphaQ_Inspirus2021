import React from 'react'
import { Collapse } from 'antd';

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const OSPTitle = `
    Contrast-Enhancement
`;

const OSPRepo = `
ashutoshsatapathy1990/Contrast-Enhancement
`;
const OSPDesc = `
Linear, piece wise linear, logarithmic, exponential stretching, power law transformation, histogram equalization, Adaptive HE, BBHE, DSIHE and CLAHE for CPU using C and OpenCV 2.4.13
`;
const OSPLink = `
https://github.com/ashutoshsatapathy1990/Contrast-Enhancement
`;

function ScrapUI() {
    return (
        <>
            <h1>ScrapUI</h1>
            <Collapse accordion onChange={callback} defaultActiveKey="1">
                <Panel header="Open Source Projects" key="1">
                <Collapse accordion defaultActiveKey="1">
                    <Panel header={OSPTitle} key="1">
                        <p>Repository: {OSPRepo}</p>
                        <p>Description: {OSPDesc}</p>
                        <p>Link: <a href={OSPLink}>{OSPLink}</a></p>
                    </Panel>
                    <Panel header={OSPTitle} key="2">
                        <p>Repository: {OSPRepo}</p>
                        <p>Description: {OSPDesc}</p>
                        <p>Link: <a href={OSPLink}>{OSPLink}</a></p>
                    </Panel>
                    <Panel header={OSPTitle} key="3">
                        <p>Repository: {OSPRepo}</p>
                        <p>Description: {OSPDesc}</p>
                        <p>Link: <a href={OSPLink}>{OSPLink}</a></p>
                    </Panel>
                </Collapse>
                </Panel>
                <Panel header="Book Recommendations" key="2">
                <Collapse accordion defaultActiveKey="1">
                    <Panel header={OSPTitle} key="1">
                        <p>Repository: {OSPRepo}</p>
                        <p>Description: {OSPDesc}</p>
                        <p>Link: <a href={OSPLink}>{OSPLink}</a></p>
                    </Panel>
                    <Panel header={OSPTitle} key="2">
                        <p>Repository: {OSPRepo}</p>
                        <p>Description: {OSPDesc}</p>
                        <p>Link: <a href={OSPLink}>{OSPLink}</a></p>
                    </Panel>
                    <Panel header={OSPTitle} key="3">
                        <p>Repository: {OSPRepo}</p>
                        <p>Description: {OSPDesc}</p>
                        <p>Link: <a href={OSPLink}>{OSPLink}</a></p>
                    </Panel>
                </Collapse>
                </Panel>
                <Panel header="Research Papers / Materials" key="3">
                <Collapse accordion defaultActiveKey="1">
                    <Panel header={OSPTitle} key="1">
                        <p>Repository: {OSPRepo}</p>
                        <p>Description: {OSPDesc}</p>
                        <p>Link: <a href={OSPLink}>{OSPLink}</a></p>
                    </Panel>
                    <Panel header={OSPTitle} key="2">
                        <p>Repository: {OSPRepo}</p>
                        <p>Description: {OSPDesc}</p>
                        <p>Link: <a href={OSPLink}>{OSPLink}</a></p>
                    </Panel>
                    <Panel header={OSPTitle} key="3">
                        <p>Repository: {OSPRepo}</p>
                        <p>Description: {OSPDesc}</p>
                        <p>Link: <a href={OSPLink}>{OSPLink}</a></p>
                    </Panel>
                </Collapse>
                </Panel>
            </Collapse>
        </>
    )
}

export default ScrapUI
